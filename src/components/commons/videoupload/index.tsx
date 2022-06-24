import { useMutation } from '@apollo/client';
import { ChangeEvent, useRef, useState } from 'react';
import { checkFileValidation } from '../../../commons/libraries/validation';
import {
  IMutation,
  IMutationUploadFileArgs,
} from '../../../commons/types/generated/types';
import styled from '@emotion/styled';
import { UPLOAD_FILE } from '../queries';
import { ImFileVideo } from 'react-icons/im';
import { accessTokenState } from '../../../commons/store';
import { useRecoilState } from 'recoil';

export const UploadVideoWrapper = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
`;

export const UploadButton = styled.button`
  color: white;
  width: 100px;
  height: 100px;
  background: #bdbdbd;
`;

export const RecordSaveButton = styled.button`
  width: 200px;
  height: 30px;
  background: #ffb950;
  border: none;
  border-radius: 10px;
  color: white;
  margin: 0px;
  cursor: pointer;
  :disabled {
    background-color: #bdbdbd;
  }
`;

export const GardenVideoUpload = styled(ImFileVideo)`
  font-size: 15px;
  color: #ffb950;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 767px) {
    font-size: 27px;
  }
`;

export default function VideoUpload(props: {
  onChangeVideoUrls?: (fileUrl: string) => void;
  videoUrls?: Array<string>;
  type?: string;
  recordUrls?: any;
  handleClose?: () => void;
}) {
  const fileRef = useRef<HTMLInputElement>(null);

  const [, setVideoUrl] = useState<string | undefined>('');
  const [uploadFile] = useMutation<
    Pick<IMutation, 'uploadFile'>,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const [isToken] = useRecoilState(accessTokenState);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    const isValid = checkFileValidation(file);
    if (!isValid) return;

    try {
      const { data: resultVideoUrl } = await uploadFile({
        variables: { files: [file] },
      });

      setVideoUrl(resultVideoUrl?.uploadFile[3]);
      if (props.onChangeVideoUrls)
        props.onChangeVideoUrls(String(resultVideoUrl?.uploadFile[3]));
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickVideo = () => {
    if (isToken) {
      fileRef.current?.click();
    } else {
      alert('Please Log in');
    }
  };

  // record
  const onClickRecordUpload = async () => {
    try {
      const { data: resultVideoUrl } = await uploadFile({
        variables: { files: [props.recordUrls] },
      });

      setVideoUrl(resultVideoUrl?.uploadFile[3]);
      if (props.onChangeVideoUrls)
        props.onChangeVideoUrls(String(resultVideoUrl?.uploadFile[3]));
      // @ts-ignore
      props.handleClose();
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <>
      <UploadVideoWrapper>
        {props.type === 'garden' && (
          <GardenVideoUpload onClick={onClickVideo} />
        )}
        {props.type === 'comment' && (
          <ImFileVideo onClick={onClickVideo} size={'15'} />
        )}

        <input
          id='images'
          style={{ display: 'none' }}
          type='file'
          onChange={onChangeFile}
          ref={fileRef}
        />
      </UploadVideoWrapper>
      {props.type === 'record' && (
        <RecordSaveButton
          onClick={onClickRecordUpload}
          disabled={!props?.recordUrls?.size}
        >
          저장하기
        </RecordSaveButton>
      )}
    </>
  );
}

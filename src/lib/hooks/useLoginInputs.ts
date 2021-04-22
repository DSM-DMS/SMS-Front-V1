import useInput from "./common/useInput";

const useLoginInputs = () => {
  const [id, onChangeId] = useInput();
  const [pw, onChangePw] = useInput();

  return [id, pw, onChangeId, onChangePw] as const;
};

export default useLoginInputs;

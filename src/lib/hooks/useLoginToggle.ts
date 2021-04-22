import useToggle from "./common/useToggle";

const useLoginToggle = () => {
  const [showPw, toggleEye] = useToggle();
  const [autoLogin, toggleAutoLogin] = useToggle(true);

  return [showPw, autoLogin, toggleEye, toggleAutoLogin] as const;
};

export default useLoginToggle;

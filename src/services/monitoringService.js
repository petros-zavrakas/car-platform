const addError = (error, errorInfo) =>
  console.error(error, errorInfo.componentStack);

export default { addError };

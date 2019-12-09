const logError = (error, errorInfo) =>
  console.error("Error occured ", errorInfo.componentStack);

export default { logError };

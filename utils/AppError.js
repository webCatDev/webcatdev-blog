function AppError (status, message) {
    const error = new Error(message);
    error.status = status;
    return error
}

export default AppError;
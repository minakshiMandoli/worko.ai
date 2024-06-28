const options = {
  defaultStatus: {
    ACTIVE: "active",
    INACTIVE: "inactive",
    DELETED: "deleted",
    PENDING: "pending",
  },
  errorMessage: {
    UNAUTHORIZED_ACCESS: "Not authorized to perform this action",
    SERVER_ERROR: "Oops! something went wrong.",
    DOES_NOT_EXIST: (data) => `The ${data} does not exist`,
    ALREADY_EXIST: (data) => `The ${data} already exist`,
  },
  successMessage: {
    UPDATE_SUCCESS_MESSAGE: (data) => `${data} updated successfully`,
    DELETE_SUCCESS_MESSAGE: (data) => `${data} deleted successfully`,
    ADD_SUCCESS_MESSAGE: (data) => `${data} added successfully`,
    FETCHED_SUCCESS_MESSAGE: (data) => `${data} fetched successfully`,
  },
};
module.exports = options;

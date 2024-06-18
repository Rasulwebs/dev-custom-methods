// To check the data based on the established legal rules

export const regexPhoneNumber: RegExp = /^998(\d{9})$/; // for uzb

export const regexPassword: RegExp =
  /^(?=.*[0-9])(?=.*[!@#$%^&*()\\[\]{}\\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=.*[A-Z])(?=.*).{8,16}$/;


  // Regular expression to match file extensions for homework files.
  // This regular expression matches file extensions for homework files, which are typically image files (jpg, jpeg, png, gif) and PDF files.
  
export const regexHomeworkFile: RegExp = /\.(jpg|jpeg|png|gif|pdf)$/i;

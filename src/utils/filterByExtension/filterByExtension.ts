/* eslint-disable @typescript-eslint/no-explicit-any */

// It takes an array of files (files) and an array of desired extensions (extensions).
// It creates a Set to store the valid extensions in lowercase for case-insensitive comparisons.
// It filters the files array based on the following logic:
// Extracts the file extension (the part after the last dot in the filename) and converts it to lowercase.
// Checks if the extension exists in the validExtensions set.
// Returns only files with extensions matching any of the provided extensions.


export const filterByExtension = (
  files: any[],
  extensions: string[]
): any[] => {
  const validExtensions = new Set(extensions.map((ext) => ext.toLowerCase()));
  return files.filter((file) => {
    const extension = file.name.split(".").pop()?.toLowerCase();
    return extension && validExtensions.has(extension);
  });
};

import { Storage } from "aws-amplify";

export async function s3Upload(file) {
  const filename = `${Date.now()}-${file.name}`;
  // const fileBlob = new Blob([file], {type : file.type});
  const stored = await Storage.vault.put(filename, file, {
    level: 'private',
    contentType: file.type
  })

  return stored.key;
}
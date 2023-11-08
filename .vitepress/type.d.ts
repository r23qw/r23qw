module "jinrishici" {
  export function load(
    callback: (result: { data: { content: string } }) => void,
    errorCallback?: (error: any) => void
  );
}

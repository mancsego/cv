export {}

declare global {
  interface Window {
    grecaptcha: {
      execute: Function
      render: Function
      ready: Function
      execute: (key: string, payload: any) => Promise<any>
      getResponse: Function
    }
  }
}

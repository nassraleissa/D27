import * as React from "react"

export const toast = (options: any) => {
  // Placeholder toast function
  console.log("Toast:", options)
}

export function useToast() {
  return {
    toast: (options: any) => {
      console.log("Toast:", options)
    }
  }
}

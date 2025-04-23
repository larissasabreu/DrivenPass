export function conflictError(resource: string) {
  return {
      type: "conflict",
      message: `${resource} já existe!`
  }
}

export function notFoundError(resource: string) {
  return {
      type: "notFound",
      message: `${resource} não encontrada!`
  }
}

export function unauthorizedError(resource: string) {
  return {
      type: "unauthorized",
      message: `${resource} não compatível ou não autorizada!`
  }
}
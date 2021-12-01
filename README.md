This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
First, run the development server:

```bash
cd basereact
yarn
yarn dev
```

## Learn More
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Open 
http://localhost:3085

## In case you have the error: ENOSPC: SYSTEM LIMIT FOR NUMBER OF FILE WATCHERS REACHED

SOLUÇÃO
Aumentar o limite de user watches no sistema operacional.

Verificar o limite atual:

```bash
cat /proc/sys/fs/inotify/max_user_watches
8192
```

Ajustar o novo limite no arquivo /etc/sysctl.conf:

```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

O comando acima acrescentou a linha "fs.inotify.max_user_watches=524288" ao arquivo /etc/sysctl.conf e em seguida pediu ao kernel para recarregar as novas configurações.

Verificar o novo limite:

```bash
cat /proc/sys/fs/inotify/max_user_watches
524288
```
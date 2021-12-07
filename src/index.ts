type Log = (message: string, userId?: string) => void;

let log: Log = (message, userId = "asdf") => {
  const time = new Date().toLocaleTimeString();
  console.log(time, message, userId);
};

export interface DataBackend {
  ip: string;
  port: string;
}

export interface Settings {
  dataBackend: DataBackend;
  useFakeBackend: boolean;
}

export const defaultSettings: Settings = {
  dataBackend: {
    ip: '192.168.1.100',
    port: '8080',
  },
  useFakeBackend: false,
};

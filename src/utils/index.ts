export const getLocalItem = (key: string) => {
  const value = localStorage.getItem(key);
  return JSON.parse(value ?? 'false');
};

export const setLocalItem = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const removeLocalItem = (key: string) => {
  localStorage.removeItem(key);
};

export const clearLocalItems = () => {
  localStorage.clear();
};

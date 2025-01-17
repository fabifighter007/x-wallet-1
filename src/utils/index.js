import BigNumber from 'bignumber.js';

export const getTimestamp = () => Math.floor(new Date().getTime() / 1000);

export const createBlob = (str, mime) => {
  const string = typeof str === 'object' ? JSON.stringify(str) : str;
  if (string === null) return '';
  const blob = new Blob([string], {
    type: mime,
  });
  return window.URL.createObjectURL(blob);
};

export const convertContacts = (data) => {
  const contacts = [];
  const dataArr = Object.keys(data);
  for (let i = 0; i < dataArr.length; i += 1) {
    const chainContacts = data[dataArr[i]];
    const chainContactsArr = Object.keys(chainContacts);
    for (let j = 0; j < chainContactsArr.length; j += 1) {
      contacts.push(chainContacts[chainContactsArr[j]]);
    }
  }
  return contacts;
};

export const convertNetworks = (data) => {
  const networks = [];
  const dataArr = Object.keys(data);
  for (let i = 0; i < dataArr.length; i += 1) {
    networks.push(data[dataArr[i]]);
  }
  networks.sort((a, b) => {
    const idA = Number(a.id);
    const idB = Number(b.id);
    return idA - idB;
  });
  return networks;
};

export const revertNetworks = (data) => {
  const networks = {};
  for (let i = 0; i < data.length; i += 1) {
    networks[data[i].id] = data[i];
  }
  return networks;
};

export const convertRecent = (data) => {
  const recent = [];
  const dataArr = Object.keys(data);
  for (let i = 0; i < dataArr.length; i += 1) {
    const chainRecent = data[dataArr[i]];
    const chainRecentArr = Object.keys(chainRecent);
    for (let j = 0; j < chainRecentArr.length; j += 1) {
      recent.push(chainRecent[chainRecentArr[j]]);
    }
  }
  recent.sort((a, b) => {
    const createdDateA = new Date(a.createdTime);
    const createdDateB = new Date(b.createdTime);
    return createdDateB - createdDateA;
  });
  return recent;
};

export const creationTime = () => Math.round((new Date()).getTime() / 1000) - 15;

export const shortenAddress = (address = '', start = 5, chars = 5) => (address.length > 14 ? `${address.substring(0, start)} ... ${address.substring(address.length - chars)}` : address);

export const shortenPrivateKey = (address = '', start = 5, chars = 5) => `${address.substring(0, start)}****************${address.substring(address.length - chars)}`;

export const convertTowCharacters = (character) => `0${character}`.slice(-2);

export const roundNumber = (price, params = 6) => {
  const numb = parseFloat(price);
  return +numb.toFixed(params);
};

export const BigNumberConverter = (value) => {
  const valueConverter = parseFloat(value);
  const result = new BigNumber(valueConverter).decimalPlaces(12).toString();
  return parseFloat(result);
};

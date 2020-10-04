import { useState, useCallback, useEffect } from 'react';
import isArray from 'lodash/isArray';

/**
 * useStorage hook is used for easy work with localStorage
 *
 * It takes optional parameter keys that should be an array of string
 * Each element in keys array should represent the name of the key from localStorage
 *
 * There are three custom methods that can be used: set, get, remove
 *
 * It returns an array where first element is the storage object and the second element - object, where key represents storage key and value is storage value
 *
 * Usage:
 *
 * const [{ key }, storage] = useStorage(['key']);
 *
 * storage.set('key', value);
 * storage.get('key');
 * storage.remove('key');
 *
 * @param {array} keys
 *
 * @returns {array}
 *
 */
const useStorage = (keys) => {
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const storage = window.localStorage;

  const parseValue = (value) => {
    if (!value) return null;

    return JSON.parse(value);
  };

  Storage.prototype.set = function (key, value) {
    this.setItem(key, JSON.stringify(value));

    forceUpdate();
  };

  Storage.prototype.get = function (key) {
    const value = this.getItem(key);
    return parseValue(value);
  };

  Storage.prototype.remove = function (key) {
    this.removeItem(key);

    forceUpdate();
  };

  const getItemsByKeys = () => {
    if (!keys) return {};

    if (!isArray(keys)) {
      console.warn('useStorage accept a valid array as parameter');
      return {};
    }

    const obj = {};

    keys.forEach((key) => {
      obj[key] = storage.get(key);
    });

    return obj;
  };

  useEffect(() => {
    forceUpdate();
  }, [storage]);

  const itemsObj = getItemsByKeys();

  return [itemsObj, storage];
};

export default useStorage;

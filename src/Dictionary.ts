type CallBack<H, T> = (
  value: T,
  index: H,
  dictionary: Dictionary<H, T>
) => void;

export default class Dictionary<K, V> {
  #keys: K[] = [];
  #vals: V[] = [];

  get size(): number {
    return this.#keys.length;
  }

  set(key: K, value: V): void {
    const index = this.getIndex(key);
    if (index >= 0) {
      this.#vals[index] = value;
    } else {
      this.#keys.push(key);
      this.#vals.push(value);
    }
  }

  get(key: K): V | undefined {
    const index = this.getIndex(key);
    return this.#vals[index];
  }

  /**
   * remove a key-value from the dictionary.
   * @param key
   * @return true if an element in the Map object existed and has been removed, or false if the element does not exist.
   */
  delete(key: K): boolean {
    const index = this.getIndex(key);
    if (index >= 0) {
      this.#keys.splice(index, 1);
      this.#vals.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  has(key: K): boolean {
    return this.#keys.includes(key);
  }

  forEach(callback: CallBack<K, V>): void {
    this.#keys.forEach((key, index) => {
      callback(this.#vals[index], key, this);
    });
  }

  private getIndex(key: K): number {
    return this.#keys.indexOf(key);
  }
}

type Event = {
  type: string;
  target: Publisher;
  payload?: object;
};

type Callback = (e: Event) => void;

class Publisher {
  #subscribers: {
    [type: string]: Subscriber[];
  } = {};
  subscribe(eventType: string, watcher: Subscriber): this {
    const eventWatchers = (this.#subscribers[eventType] =
      this.#subscribers[eventType] || []);
    eventWatchers.push(watcher);
    return this;
  }
  publish(e: Event | string, payload?: object): this {
    let type;
    if (typeof e !== "string") {
      type = e.type ? e.type : e;
    } else {
      type = e;
      e = { type, target: this, payload };
    }
    this.#subscribers[type].forEach((subscriber) => {
      subscriber.dispatch(e as Event);
    });
    return this;
  }
}

class Subscriber {
  constructor(private callback: Callback) {}
  dispatch(e: Event): void {
    this.callback(e);
  }
}

const publisher = new Publisher();
const sub = new Subscriber((e) => {
  console.log(e);
});

publisher.subscribe("fuck", sub);
publisher.publish("fuck", { target: "female" });

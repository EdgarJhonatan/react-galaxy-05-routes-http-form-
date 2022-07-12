const get = (url) => {
   return fetch(url).then((res) => res.json());
};

const post = (url, body) => {
   return fetch(url, {
      method: "POST",
      headers: {
         "Content-type": "application/json",
      },
      body: JSON.stringify(body),
   }).then((res) => res.json());
};

const put = (url, body) => {
   return fetch(url, {
      method: "PUT",
      headers: {
         "Content-type": "application/json",
      },
      body: JSON.stringify(body),
   }).then((res) => res.json());
};

const remove = (url) => {
   return fetch(url, {
      method: "DELETE",
      headers: {
         "Content-type": "application/json",
      },
   }).then((res) => res.json());
};

const Http = {
   get,
   post,
   put,
   delete: remove,
};

export default Http;

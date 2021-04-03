let axios = options => {
    return new Promise((resolve, reject) => {
        let method = options.method || "GET"
        let async = options.async || true;
        let xhr = new XMLHttpRequest()
        if (method === 'get') {
            xhr.open(method, options.url, async)
            xhr.send()
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304)
                        data = JSON.parse(xhr.responseText);
                    resolve(data);
                }
            };
        } else if (method === 'post') {
            xhr.open(method, options.url, async)
            xhr.send(options.data)
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304)
                        data = JSON.parse(xhr.responseText);
                    resolve(data);
                }
            };
        }
    })
}

axios.get = (url) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open("get", url, true)
        xhr.send()
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304)
                    data = JSON.parse(xhr.responseText);
                resolve(data);
            }
        }
    })
}

axios.post = (url) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open("get", url, true)
        xhr.send(data)
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304)
                    data = JSON.parse(xhr.responseText);
                resolve(data);
            }
        }
    })
}

exports.axios = axios()
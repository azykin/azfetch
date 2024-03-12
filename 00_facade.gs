/**
 * ### ___________________________________________
 * Fetch logic for get request
 * 
 * For more questions welcome to tg: [@azykin](https://t.me/azykin)
 *
 * @param {String} [url]
 * ### url
 * Rquested url
 * 
 * @param {Object} [_headers]  
 * #### Object of headers and values, like
 * ```json
 * {
 *   "key1": "value1",
 *   "key2": "value3",
 * }
 * ```
 * @param {bool} [logger] enable or not logger
 * @returns {Object} 
 * #### Return data as parsed object from JSON
 */
function fetchGet(url, _headers = {}, logger = true) {

    // add attempt, status code & outputDto

    if (!!logger) {
      Logger.log(`Start: fetch_data; url: ${url}`);
    }

    if (!url) {
        return {};
    }

    const headers = Object.assign({}, _headers);
    headers.Accept = "application/json";

    var options = {
        async: true,
        crossDomain: true,
        method: "GET",
        headers: headers,
    };

    var authResp = UrlFetchApp.fetch(url, options);

    var res = authResp.getContentText();

    json = JSON.parse(res);

    return json;
}

/**
 * ### ___________________________________________
 * Fetch logic for post request
 * 
 * For more questions welcome to tg: [@azykin](https://t.me/azykin)
 *
 * @param {String} [url]
 * ### url
 * Rquested url
 * 
 * @param {Object} [_headers]  
 * #### Object of headers and values, like
 * ```json
 * {
 *   "key1": "value1",
 *   "key2": "value3",
 * }
 * ```
 * @param {bool} [logger] enable or not logger
 * @returns {Object} 
 * #### Return data as parsed object from JSON
 */
function fetchPost(url, _options = {}, _body = {}, logger = true) {

    if (!!logger) {
      Logger.log(`Start: fetch_data; url: ${url}`);
    }

    if (!url) {
        return {};
    }

    const options = Object.assign({}, _options);

    const headers = Object.assign({}, options?.headers);
    headers.Accept = "application/json";

    // options.async = true;
    // options.crossDomain = true;
    options.method = "POST";
    options.contentType = "application/json";
    options.headers = headers;
    options.payload = JSON.stringify(_body);
    // options.payload = _body;
    options.muteHttpExceptions = false;

    var authResp = UrlFetchApp.fetch(url, options);

    var res = authResp.getContentText();
    Logger.log(res);

    json = JSON.parse(res);

    return json;
}

function test() {
  fetchPost("",)
}

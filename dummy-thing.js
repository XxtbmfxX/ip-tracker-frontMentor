// pull from different file
const secret_api = "ENTER_YOUR_API";
const bypass_cors_url = "https://cors-anywhere.herokuapp.com/";
const api_uri = "https://geo.ipify.org/api/";
let current_verion = "v1";

const headers_option = {
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};

getIPDetails = (default_ip) => {
  if (default_ip == undefined) {
    var ip_url = `${bypass_cors_url}${api_uri}${current_verion}?apiKey=${secret_api}`;
  } else {
    var ip_url = `${bypass_cors_url}${api_uri}${current_verion}?apiKey=${secret_api}&ipAddress=${default_ip}`;
  }
  fetch(ip_url, headers_option)
    .then((results) => results.json())
    .then((data) => {
      //updateState
    })
    .catch((error) => {
      alert("Unable to get IP details");
      console.log(error);
    });
};

document.addEventListener("load", updateMarker());

search_btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (entered_ip.value != "" && entered_ip.value != null) {
    getIPDetails(entered_ip.value);
    return;
  }
  alert("Please enter a valid IP address");
});

import { createGlobalStyle } from 'styled-components';

export const IconFont = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1586507030431'); /* IE9 */
  src: url('./iconfont.eot?t=1586507030431#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAUwAAsAAAAACgQAAATiAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDSAqGcIVvATYCJAMYCw4ABCAFhG0HXhurCBEVpG2R/TywYzrD2ps0mycjLZL2OR/Cy/5NZpKmQSHu0SWxe7a+gARAVPq+UwtqbwIuQDJh6S0+uceX4yzlyer6n2Oplw2U387OJbIsKvEAjw/owLoXdm82wQ1kPEAb8xb12k5KJmfC5dtAAEhwgQ4kLCIuDSIYYBEBQOqqK4shVqxgPUwC0SAQOxnIUvAQuXncQwBLku8n32AkEQEOPAXclVQRXoagz/HTJqrX9HnUAMN6bgDqPoAC0AFgAOkjvR2gWVwHCsn+DQwxABSI4MA+x+e2n3t/2fPTJk1DRQlBAgX/5QEMFDwIOIAI4FpFwsYleOBzBGYwW2fLzaBc580FwANf9rhBcJky3gYOACCsOMMYIG4AqQFQdNATzOb9fIbnWKn8xF4F8sarfg/TXr/O2GxwfeONzAXJmY+LZ7x8mfZSn/7qVfqCN6a9eIMYeoW1e70kKmdKZP0RWSarb0vd74AEmVN273cw2nDA13zXvt67YRduuD5M2/+6x6y3XzD7oP7VhNsTsYrr5NhjYeThS2m+T+l8+ZMvMg02T3oX3Lp3znrfK+dNWLXOau3ancG4tVY799qtXLdun/eunmr7dZv0G61WnnwJxPmvTz1ts/p15pYnb7wRuOfABoPD+v0+q9evd1gdZm7esMF2s+sW6qQDVx7c6TY5/dyFNxxYsA9Mv082Ter1e0vmr7fh12yop/aq8/eTPvNekxKKeqy5lSTLhq5BcE8YZ367etXj0pqXIXGIQ3OGbfjxuOO2YS0ZsST9Xn2Ds3408UckJ5qHF/rGX/RNGF5woqUZCYPD/0mZtDjLH5OpqTM7EPRZbrvZ7NmZyg7/qO5lM3ziUZCDjLL2Oe25h4L2Mxe2P8g56DyCuHPrPqd/nbgeZfJBgrsui+toJZn24QP8B43JxVcaR2ZtMLvDkbi8+mjTb/5MqEoIJz2zhkTaT4/SbR+W4SGPqMIbqvoO3D/ROx/0qb28xS4hNCqgbCDC1eqeyfLkDfc6praPH+byw7/n112ZdWV9UOKImp6I/8LVDONMIYlOSqApQooYKn2VtkZKNQ4Otw2xjTA/Gl+51gE2D9SOexuCi+99tF3XNk/IGG4Vk6/72coG44uEp0ke/HIVDlAji/o0qzqp/qiMV35sIsZb49RYVkKaZ7UosIccZcUpUFpkLuIJFegDVNIuCkC7SvH+IED7nBHqAGiD9BY1ANrfdCfl/8ifgdHENUmFppN/E2UGAHj7dIJNYtYG53kNwG+lw2jZ/9fGAGgaI5pCsgnM6h1MAQEgIAe8iHIAJAwCGg9a4P219NajowCBWJGpwMEIzkAhwgvJsDrgIWM0CBAxDSQEInK/DEu0gIIwYwABmMWAwAxHgIMJrgCFGR4hGfY94GGD70CAGaEgIYNYnijDh7jy05vCGSL5O+UgG/sOe0pLv5HOi9OyImH/Q0sOUd909dQXNugaa8olDWZMrLLSJ7sPyyK0q0wI1oxm+6ltmfqgJshaPSFU4QyR/J1ykI2jwfbU+PpvpPPitKenLfwPLXl06ptuBPJLu43qeZbx5ZIGM5bmscpKn9yNBeNCOz1tQrBmnBHdT63ox2O1zf769S4PAUiAzxUIRyhhhCcCMYJQKZIWPLAL8CLz0a7ZDHq4y5bG82t05mq3ueVecqkqAAA=') format('woff2'),
  url('./iconfont.woff?t=1586507030431') format('woff'),
  url('./iconfont.ttf?t=1586507030431') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1586507030431#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icongoogle:before {
  content: "\e87a";
}

.iconfacebook:before {
  content: "\f19d";
}

.icontwitter:before {
  content: "\e617";
}

.iconyonghu:before {
  content: "\e600";
}

.icondata-analysis:before {
  content: "\e625";
}
`

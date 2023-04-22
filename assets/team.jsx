const TeamSvg = ({ color }) => {
  // return (
  //   <svg
  //     width="24"
  //     height="24"
  //     viewBox="0 0 24 24"
  //     fill="none"
  //     xmlns="http://www.w3.org/2000/svg"
  //     xmlns:xlink="http://www.w3.org/1999/xlink">
  //     <rect width="24" height="24" fill="url(#pattern0)" />
  //     <defs>
  //       <pattern
  //         id="pattern0"
  //         patternContentUnits="objectBoundingBox"
  //         width="1"
  //         height="1">
  //         <use xlink:href="#image0_1_329" transform="scale(0.01)" />
  //       </pattern>
  //       <image
  //         id="image0_1_329"
  //         width="100"
  //         height="100"
  //         xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAETJJREFUeF7t3QW0LFtxBuAfCQ7BLbi7Bffg7u6ehODuGgjutnB3d3f3IAGCBQ/uruuDvR995/bMdPd0T89b79RaZ9175nRvq71L/qrac7Ds0U6twMF2ajR7g8keQ3ZsE+wxZI8hO7YCOzacA9sJOUySf0ly7iRnSXKSJMdKcqSyrj9L8t0kX07y8STvT/LOJL/ZsXVfOpwDC0Mw4N+TXCHJEXou7s+TvDLJE5N8oOe7W3981xlyjiQPSnLBlpX5XJKvJvl+kh+Uvx89yTHKyTlVyzvvSHKXJB/e+kp37HBXGXLYJA9JcvMkBy9z+UOSVyR5dZK3JfnOmjkeJ8lFklw2yRWTHLI8/6ckj09y5yS/7rhOW3tsFxlywiJizlRWwaI9LckjyokYsjgnTnL7JDdOQg+hTxRGfW1Ig1O9s2sMIWbekuR4jUW7dhLiaRkduSjvPxdl/9MVz542yXOTVGZ/I8lFk3xhqgXu2+4uMeS4ST6Y5PhlEo9Ncockvyu/Hy3JvZPQA0RXpdMl+XT5xf8/2/jblYr+uU+SH5XPD5Xk4UluUX7/epJzdhCBfdd20PO7whDy/T1lYUzkkUlutzAjv1tIpu0/LvztKkmckJctfM7CYpXdNsmjFv6mj9uUz95XGEdPzUq7wpC7J/nPshL0xU3LAjcX52RJnloU+v07rpoTxW+5SZIvLbxj7vq6Yfn8rsWi69j0NI/tAkNYQ/9bdvL/JSF2fjnNdPdr1ekh4k6Q5BdJTp7k/7fUd2s3u8CQ/yq+gQFeKskbysJQ7pTtJVpOy9A1Y0K/KYnTRpk7NZdO8trS4AOTOK2z0dwMOURRppy59yY5X1mJqyV5UZLfJjnKiP7C4ZL8OAnFftUkL23oEGgA2OWfkvxxLo7MzZDzFmVu/mT5M8tCYJTf7WBY1JhEp8DA9FUX/kZFn+jnPMWMHrPPzm3NzRDeMmgEAQm/13nk4z547IbZe6ckDx23+e6tzc2QZye5bpJvNZzB7qMf98lvJ2FgPCvJDcZtuntrczPkdUWRA/sAiXPSR5KcNYkxXWaugczNEJYUAJBjRp8gyC7c6WFJ3jXRwrT1waigP4zpYhP1u7bZuRny8gLwfSbJ6ctoX1N2qH8vt3YGwx5o64M/cpri7fP8Z6G5GQIKAYmI6B0xCejiAo0T8u6JVmWxj39IAmY5dDmZd5yo37XNzs0QCp1iR/yAuSJ6TfP7Okmet3blJnpg2wzhkJHTEFvE3GTdGEcboDjRtPdr9tFJbpVE8Iqlxfzm1Z+/6Lffb2sg22bIi4uHLD7+pDLJNxcY4yfFYeNJb5OOmuQrBUEGq4BqELATjLLVjbJthtiJ/5bkGo2YBhOTkkVPSXKzbXKjeOg8dWQszF70H0kek4SjSNdthaZmyNWLiKqBJmIANvXDhdlVk1NMA7Qxlbm7uKj6Ep+3DgwIyr5JkiZqAgW87R4F/HzjVNyZmiHEkGAS87Wegra5MDc/VuLd5Dc/YVXYdoz1EM6lyyy0uL08r8+vaNjJlkr0P0m8OwlNzZBbloly9GoIddlEWDcsLmOSUWK3fnGSWSenKKAlBY6IrGes6QvjBMhekOSFE41r55KthVpllyDK3a5kCIxJxKidTnQi0cd7jdnBJm1NcUJA50TUh4pJ23d8QqksnJqP9ZwkPgNAbkIyWSDLslgQ6P2eSQTI+pKYCewN0jAqTcGQKmvFMSjNIQTf4pwds7ws88TvrJ1mVkmXtoWEicxrlcCUd4RpMebtXRpoeUbIWbhXEl6NNg5sat/XpmAIr5cVIsuDVTKUpAUBGImYelq0xWdgGVlMSW4WV6TPXDCQs3mishkuXHybOgaO3/OTgEY2iZ3bHJzGixclP3SO+703BUN0QmyNFQZl0cirkmPVZEyfRcAIKULaYSWNQWPO8YDxTMWQMSa82IadT0TIgL9QIyV0WV8ASyfpVeVnrmhkr7WYgiEnLX7E00fMFlmcFHRW2qm+ztywku5W/Bf1IXyKqTAo+cF0ktiJdNTRaAqGEAmnLov0kiRSNX812oj3b8gcmK4W/34TbgI9y1qRQiRpGxj51oLDjTa9sRgiFRSU7oeX3WxXjAMsQRFy/GZP1+y5ehDq65efcy3oMXoSzCOBm3m+8dzGYIhEZSk1p+wwUWKEVzxX3KPDEPd5RKhA0gPRuI6YwjbkRsVAmzKELU9X2EVIKqjkM7UXlCgzlIwXEmWKIslvcq5AEGOQOfC06RWOHoByDDI3G60W+tS5wdwAjm1z4y85TYOhlU0YwgbnFBkwiwai++QlitRicRhVRVGI5L33a6BqkwVU4GOxEKaPUYBjbK8v4mnI3MD44jy9aShDBHUkJgDnJCnLk1XbsY7IYJbJ4Yszx9sVy96ExlbqCoCIH2Di0LmJgkIIegfbhjKkRtMsJE+6DwAoOFXF1U4Be2VXNJO/jVWOcVdqzo3FpxyiFw1hCBEFdlDR1BbU6TIAxTkgFjA70I8nvQtEtH6z6IdN56Y6mATphVgMYQirqlpJUi5ZIX2JUmcMIKjpJpbJmEqdVSV6iVhMzNm+1Jzb2ZPIiOxMQxiiuonyRrLI1Yr3Je/xptFQpjqpHFAg3+NKWwwLiQqijb12Znlf8sUTyv+ZuoDMvtScm8otVVqdaQhDxCYUtiD15EOurWBp1RpxhfwP7jziv2XJi0TyZ2rEb/F1StUJVDjaB8NqltYRX0McvebcepfJDWGIxZCNgSQBLCYsdFlb75GxSHt1h6971+nEvBrtW/c8K8epqeJx3fPgEJkxc8ztr50OYQgYvFa7Di1uaWYKumXBXSSrCOwuvoJ5lfgwrDXKlyJGDASx+GsuXMdhkYWH1zmNc8xtn3kPYQj7nHUkHqCwRd5SXxJ4EsUj54mgdadMnN2CImAlcQVaX0Wijk5GrXvX57qcXXNjQdoA25rbxgzRgMUQk1AzDv2s4qcLYzBANonkau1YuFXkBDmRNs9/l8zCrtE+MRTRyzOW0yGW4q6UVSQSKfS8jbntN44hJ0QjLJuazKZqVuCoi1XjVMkMBE3UdvgkywhGxmsGj2ACM7Jv/EHJM9MT9sQiBIKuipNgRo21Tzm31jkPZYjGajma/8u+uN6a+nI14d6x41GX0jFxB7lQqFkU2uUkNp9ptuP/65S8sZnPlHMbnSFMXoq1lqLZuSAVaG8zKQ7upQRZwkO9VAbuZSeuM5mJG6cJYMgv6HIK2ybqZDod9Ildrx5+FcHaiNMp5zY6QzRo1wvMkM2V2O6cPkwBr3CUKoTtGRfH2H2Au1XEnpeKqoiGmX3rvsdi4Xk+iQtnbAIAojDAKjI3MLqLBcae29J+NxFZtVEWCVDN6XAv1TKyQzleJrnO/NTGGN58cywQgZou2gdhAKEACVcFqfrObVKG1MaJBfD6JYsSZk3JlxKrIHrgX31EThMzU7MBEtmEtEFcIePsEi5objoi1k0T7tqq4YOhc9sKQzZZrLZ3FYF+qvzhyiOkbdJjNUyweK/W2GMf3N4YImtw52tepH9qbQYnsiZhD+2vllp7n6HRO3g0tOM+743FEOkxYBSF9+x8i0kp88CBezx7EIcE7D6AHbSVXhIOrb5Ln/k1n6018QwOzmxXIp5YW3VucDROLePAhuEn8XPcEbxxutOmDBG6BfhxDOvlkqsmymqiT9TtdYmB1FvfOHKg9grZd13M+pxQsSRtCK6T5rSsIwgCiEYmP6asIwyCAijLk681iIYyRAmzxeI5L5KyAV41eB2qCyJfvJLPOwbN6lrFGHm94BIGA/+GHhhCTG2mOaOCblpVnWVuEOV6s0SzPxdsgvadfH4YaEZpwiKRBLC33ulOfRlSC+sVRNZ3+RMWi7dOLLXdCkqEsXJkY9hxRBwivpjLfpZZYLzqeg1f292J6xhU72r03KqiUifcOPRRk7rdbKcUT3aNk90GgtJHHM3LFwuzniZhaWEF4Os6n+eAOfRhCCzIwM5W3paDpBLJJKryXbc4/m5XCUr9a0PMwbMwikhbJMx0ivgO/Bc5WA/o4MuYG3TgvmXzuHuLLmgrrdMHceN0IOJH2bYCH6Z7VyIR5IZJeaq5ak4Lkd4JgO3KEIsITFSbhygxzuCQEGedHLnuZJ2hfGDgFHfbCSO6nD67EVGgxJ0xLTqZdreYiKgmXwbZ2XyINlFlo2mnXk1ORErsW7w0sytTPMeJlK3yz+UlVxUa01rmdmEICEHgH4SNeNqU3RjXdBNd4vO1zIzM5YC1HXGWkdICFbuVyHOMqteOK/KBRDdDu5Q5cdJmEOgfHld1ofxjRsoYc6NjIAPSpJBsTpti5QWfXRgi86IuGHkucN8F+ui6o+xoTK4Ke1UgiXwWkvWz7lsSJOAJMrGqli2CBIR6aQCnUaRxzJQk69u8ihbaLdV0Ka1jSDOkSc4zBetN010XvMtzjAW+ht1tQZjTq+r/yHy7nt4hRmtUEOJMPNAHTtOqUmyKuN7aoB6S0dFZ+XaZVHnG3CDH/DTE2jO2VlrFEA1xegR4TIyM7aSYegy2+ai8XOKFGJGmSreMeRKbffFH9EWPOT101Bg5wcumDtejvziV8C/Oc+vGXsUQVlC9IIaI2MZ9H6yvWqbsBKwLtw7k/V/N6BqkchGnJPCpSTy/9kNP1cDbPv2uYghgjxNl5zgd64JJY0zIqeRYEknNa//a2mYGO0WerdaXk8yiYimtSuBTUuAqDSde0GwKMbw4Zn4OcUriGF/9hoZODDFRL6Ft7aA6sAqXEFespprQQPnTLYJbLLFlSXK1HZYXC0o4FipQlTWdU7+eoiuMMsZm04Yq4JqAbbMTzZ0YQkTVu2vHqrnoOinm9SfLwyySaooSZ5IdhpBTThQSE6KG9ZsSWhdlSAcd31G85MvKUCuCvUxk1csp+yKjHce18jEngccOUeUA+rdekOlFjiPEgGXkFFOS1ZmEmUGHnXCnCFRTv8HNu75nhI/B75DmI5Q7leHQNknrbbzEltSm/S7bXMYQFgG9AZRzD3vdUb5vA/4kRj7lZxa7mol1Yqp7KUX+QlfHjXPGMSN2F78krH5nyJTzaFsr6ASDpfWap2UMqfdcScGUxPDRsiqgAEfOv1N9Zvey6OrF/Bw89edwsz4h4OYOhRYDRGFg1aHkVxHNIBu0jbnpgxiWQyxAVo2RA8a6jCE4axKAQ+DctnaR8RA7FRlg6TnWY92bxf63Q4VwERSC6CK2tnX6KXWgpzXmD+1DyxhS5SpmsAy2Rc1yMjsYSrrqS76GjIveAKnXeMe2vzOkaWntt/67xBDXe8sKodSJQ7nDmxaELmMYj1nWCROYOQw2EeLdBm3EEPD6JhB7nwly1MhUsRXmYS0x6NNGn2cpeeiyE8OhrOZonzaGPMuh9YN6n5AhHW76TvObbzZta937LLDBRf7rGu/w984M2dbxNWZ+Qo1HzPHNBLz5+l27IpOU/LYI8rAPrYPftzGwJirA1K1VsNvoWx8iefVrlcbI/9po3LvAEN4zM5SJW6OSG01qwMt1DEtBvwFtDnplboZAWmsBTt9q3EETXvISx7MmThiT0PAsNDdDOIC1OF9mIFh8DqLDqsfuprixbirqPZe5GcIpU8stM1G83L9wMqKL+Khpp1N/JmVH5FA/Tsomt6n2ZkLzhbkZYidKJwKN1BQjyWVwJ19CX7/ReRufSfuRvuMa2QrdbLS4Q16emyFt39K2jcVv64PJKwnQPVnNqqkh6zr4nbkZUn0AiWrVFyA2xDNYXU2RNfVnTN9qAg+9kXswI+qLu8KQTa4l33gRSgN1c8w6ll1hCAXOQZyTJOgxJvYYMicXWvreY8geQ/6+AnOLLCHNrlctbYtvQqtzOaiDrmfa1sIcJPuZ+4QcJBd91aT3GLJjW+IvFf3nkiFa1HYAAAAASUVORK5CYII="
  //       />
  //     </defs>
  //   </svg>
  // );
};
export default TeamSvg;
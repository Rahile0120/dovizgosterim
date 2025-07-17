const app = Vue.createApp({
    data() {
        return {
            url: "https://hasanadiguzel.com.tr/api/kurgetir",
            country: [
                {
                    id: 1,
                    name: "US DOLLAR",
                    images: "img/usa.png",
                    buying: "",
                    selling: ""
                },
                {
                    id: 2,
                    name: "EURO",
                    images: "img/flags.png",
                    buying: "",
                    selling: ""
                },
                {
                    id: 3,
                    name: "KUWAITI DINAR",
                    images: "img/kuwait.png",
                    buying: "",
                    selling: ""
                },
                {
                    id: 4,
                    name: "AUSTRALIAN DOLLAR",
                    images: "img/australia.png",
                    buying: "",
                    selling: ""
                },
                {
                    id: 5,
                    name: "SAUDI RIYAL",
                    images: "img/world.png",
                    buying: "",
                    selling: ""
                },
                {
                    id: 6,
                    name: "JAPENESE YEN",
                    images: "img/japan.png",
                    buying: "",
                    selling: ""
                },
                {
                    id: 7,
                    name: "POUND STERLING",
                    images: "img/flag.png",
                    buying: "",
                    selling: ""
                },
                {
                    id: 8,
                    name: "CHINESE RENMINBI",
                    images: "img/china.png",
                    buying: null,
                    selling: null
                },
            ]


        }
    },
    methods: {
        doviz_api() {
            fetch(this.url)
                .then(response => response.json())
                .then(data => {
                    data.TCMB_AnlikKurBilgileri.forEach(apiItem => {
                        this.country.forEach(localItem => {
                            if (localItem.name === apiItem.CurrencyName) {
                                localItem.buying = apiItem.ForexBuying;
                                localItem.selling = apiItem.ForexSelling;
                            }
                        })
                    });
                })
        }
    },
    mounted() {
        this.doviz_api();
    },
});
app.mount("#app");

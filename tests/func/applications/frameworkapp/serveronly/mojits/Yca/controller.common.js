/*
 * Copyright (c) 2011 Yahoo! Inc. All rights reserved.
 */
YUI.add('Yca', function(Y) {

    Y.mojito.controller = {

        init: function(config) {
            this.config = config;
        },

        index: function(ac) {
            var test = ac.params.getFromUrl('testname');
            var title = "This is the certificate";
            var mycert;
            if (test == 'num'){
                mycert = ac.yca.get_cert(123);
            }else if(test == 'obj'){
                var myCars=new Array("Saab","Volvo","BMW");
                mycert = ac.yca.get_cert(myCars);
            }else{
                mycert = ac.yca.get_cert('yahoo.example.testmojitoyca2');
            }
            var data = {
                title:title,
                all:mycert
            };
            ac.done(data);
        }
    };
}, '0.0.1', {requires: ['mojito-yca-addon']});

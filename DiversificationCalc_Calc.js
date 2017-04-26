        // activate sliders and update slider text values
        // Assumption Sliders
        $("#avgUpfront").slider({
            
            min: 0,
            max: 1,
            step: 0.01
            
        });
        
        $("#splitOS").slider({
            
            min: 0,
            max: 100,
            step: 1
            
        });
        
        $("#avgTrail").slider({
            
            min: 0,
            max: 0.3,
            step: 0.01
            
        });
        
        $("#splitRR").slider({
            
            min: 0,
            max: 100,
            step: 1
            
        });
        
        // Mortgage Sliders
        $("#avgMortgageSize").slider({
            
            min: 150000,
            max: 750000,
            step: 10000
            
        });
        
        $("#avgOSSettlements").slider({
            
            min: 0,
            max: 30,
            step: 1
            
        });
        
        $("#avgRRSettlements").slider({
            
            min: 0,
            max: 30,
            step: 1
            
        });
        
        $("#existingBookSize").slider({
            
            min: 0,
            max: 100000000,
            step: 1000000
            
        });
        
        $("#monthlyBookAmortisation").slider({
            
            min: 0.00,
            max: 4.00,
            step: 0.10
            
        });
        
        // Referral Sliders
        $("#fpReferrals").slider({
            
            min: 0,
            max: 25,
            step: 1
            
        });
        
        $("#settlementReferrals").slider({
            
            min: 0,
            max: 30,
            step: 1
            
        });
        
        $("#aliReferrals").slider({
            
            min: 0,
            max: 25,
            step: 1
            
        });
        
        $("#homecontentsReferrals").slider({
            
            min: 0,
            max: 30,
            step: 1
            
        });
        
        $("#builderReferrals").slider({
            
            min: 0,
            max: 30,
            step: 1
            
        });
        
        var avgMortgageSize = $("#avgMortgageSize").data("slider-min");
        var avgOSSettlements = $("#avgOSSettlements").data("slider-min");
        var avgRRSettlements = $("#avgRRSettlements").data("slider-min");
        var existingBookSize = $("#existingBookSize").data("slider-min");
        var fpRate = 100;
        var fpReferrals = $("#fpReferrals").data("slider-min");
        var settlementRate = 50;
        var settlementReferrals = $("#settlementReferrals").data("slider-min");
        var aliRate = 25;
        var aliReferrals = $("#aliReferrals").data("slider-min");
        var homecontentsRate = 25;
        var homecontentsReferrals = $("#homecontentsReferrals").data("slider-min");
        var builderRate = 2000;
        var builderReferrals = $("#builderReferrals").data("slider-min");
        var monthlyBookAmortisation = 2.00; //default as per slider settings
        var avgUpfront = 0.006; //default as per slider settings
        var splitOS = 0.80; //default as per slider settings
        var avgTrail = 0.0015; //default as per slider settings
        var splitRR = 0.45; //default as per slider settings
        var OSUpfrontYear1 = 0;
        var OSUpfrontYear2 = 0;
        var OSUpfrontYear3 = 0;
        var OSUpfrontYear4 = 0;
        var OSUpfrontYear5 = 0;
        var OSTrailYear1 = 0;
        var OSTrailYear2 = 0;
        var OSTrailYear3 = 0;
        var OSTrailYear4 = 0;
        var OSTrailYear5 = 0;
        var RRUpfrontYear1 = 0;
        var RRUpfrontYear2 = 0;
        var RRUpfrontYear3 = 0;
        var RRUpfrontYear4 = 0;
        var RRUpfrontYear5 = 0;
        var RRTrailYear1 = 0;
        var RRTrailYear2 = 0;
        var RRTrailYear3 = 0;
        var RRTrailYear4 = 0;
        var RRTrailYear5 = 0;
        var ReferralsYear1 = 0;
        var ReferralsYear2 = 0;
        var ReferralsYear3 = 0;
        var ReferralsYear4 = 0;
        var ReferralsYear5 = 0;
        var TotalIncomeYear1 = 0;
        var TotalIncomeYear2 = 0;
        var TotalIncomeYear3 = 0;
        var TotalIncomeYear4 = 0;
        var TotalIncomeYear5 = 0;
        
        $("#avgUpfront").on("change", function(slideEvt) {
            
            var item = slideEvt.value.newValue;
            var num = Number(item);
            
            $("#avgUpfront-val").text(num);
            
            avgUpfrontOL = num/100;
            
        });
        
        $("#splitOS").on("change", function(slideEvt) {
            
            var item = slideEvt.value.newValue;
            var num = Number(item);
            
            $("#splitOS-val").text(num);
            
            splitOS = num/100;
            
        });
        
        $("#avgTrail").on("change", function(slideEvt) {
            
            var item = slideEvt.value.newValue;
            var num = Number(item);
            
            $("#avgTrail-val").text(num);
            
            avgTrailOL = num/100;
            
        });
        
        $("#splitRR").on("change", function(slideEvt) {
            
            var item = slideEvt.value.newValue;
            var num = Number(item);
            
            $("#splitRR-val").text(num);
            
            splitRR = num/100;
            
        });
        
        $("#avgMortgageSize").on("change", function(slideEvt) {
            
            var item = slideEvt.value.newValue;
            var num = Number(item).toLocaleString("en");
            
            $("#avgMortgageSize-val").text(num);
            
            avgMortgageSize = item;
            
            calculate();
            
            myChart.data.datasets[0].data[0] = OSUpfrontYear1;
            myChart.data.datasets[0].data[1] = OSUpfrontYear2;
            myChart.data.datasets[0].data[2] = OSUpfrontYear3;
            myChart.data.datasets[0].data[3] = OSUpfrontYear4;
            myChart.data.datasets[0].data[4] = OSUpfrontYear5;
            myChart.data.datasets[1].data[0] = OSTrailYear1;
            myChart.data.datasets[1].data[1] = OSTrailYear2;
            myChart.data.datasets[1].data[2] = OSTrailYear3;
            myChart.data.datasets[1].data[3] = OSTrailYear4;
            myChart.data.datasets[1].data[4] = OSTrailYear5;
            myChart.data.datasets[2].data[0] = RRUpfrontYear1;
            myChart.data.datasets[2].data[1] = RRUpfrontYear2;
            myChart.data.datasets[2].data[2] = RRUpfrontYear3;
            myChart.data.datasets[2].data[3] = RRUpfrontYear4;
            myChart.data.datasets[2].data[4] = RRUpfrontYear5;
            myChart.data.datasets[3].data[0] = RRTrailYear1;
            myChart.data.datasets[3].data[1] = RRTrailYear2;
            myChart.data.datasets[3].data[2] = RRTrailYear3;
            myChart.data.datasets[3].data[3] = RRTrailYear4;
            myChart.data.datasets[3].data[4] = RRTrailYear5;
            myChart.update();
            
            
        });
        
        $("#avgOSSettlements").on("change", function(slideEvt) {
            
            $("#avgOSSettlements-val").text(slideEvt.value.newValue);
            
            avgOSSettlements = slideEvt.value.newValue;
            
            calculate();
            
            myChart.data.datasets[0].data[0] = OSUpfrontYear1;
            myChart.data.datasets[0].data[1] = OSUpfrontYear2;
            myChart.data.datasets[0].data[2] = OSUpfrontYear3;
            myChart.data.datasets[0].data[3] = OSUpfrontYear4;
            myChart.data.datasets[0].data[4] = OSUpfrontYear5;
            myChart.data.datasets[1].data[0] = OSTrailYear1;
            myChart.data.datasets[1].data[1] = OSTrailYear2;
            myChart.data.datasets[1].data[2] = OSTrailYear3;
            myChart.data.datasets[1].data[3] = OSTrailYear4;
            myChart.data.datasets[1].data[4] = OSTrailYear5;
            myChart.update();
            
        });
        
        $("#avgRRSettlements").on("change", function(slideEvt) {
            
            $("#avgRRSettlements-val").text(slideEvt.value.newValue);
            
            avgRRSettlements = slideEvt.value.newValue;
            
            calculate();
            
            myChart.data.datasets[2].data[0] = RRUpfrontYear1;
            myChart.data.datasets[2].data[1] = RRUpfrontYear2;
            myChart.data.datasets[2].data[2] = RRUpfrontYear3;
            myChart.data.datasets[2].data[3] = RRUpfrontYear4;
            myChart.data.datasets[2].data[4] = RRUpfrontYear5;
            myChart.data.datasets[3].data[0] = RRTrailYear1;
            myChart.data.datasets[3].data[1] = RRTrailYear2;
            myChart.data.datasets[3].data[2] = RRTrailYear3;
            myChart.data.datasets[3].data[3] = RRTrailYear4;
            myChart.data.datasets[3].data[4] = RRTrailYear5;
            myChart.update();
            
        });
        
        $("#existingBookSize").on("change", function(slideEvt) {
            
            var item = slideEvt.value.newValue;
            var num = Number(item);
            
            $("#existingBookSize-val").text(num.toLocaleString("en"));
            
            existingBookSize = num;
            
            calculate();
            
            myChart.data.datasets[1].data[0] = OSTrailYear1;
            myChart.data.datasets[1].data[1] = OSTrailYear2;
            myChart.data.datasets[1].data[2] = OSTrailYear3;
            myChart.data.datasets[1].data[3] = OSTrailYear4;
            myChart.data.datasets[1].data[4] = OSTrailYear5;
            myChart.data.datasets[3].data[0] = RRTrailYear1;
            myChart.data.datasets[3].data[1] = RRTrailYear2;
            myChart.data.datasets[3].data[2] = RRTrailYear3;
            myChart.data.datasets[3].data[3] = RRTrailYear4;
            myChart.data.datasets[3].data[4] = RRTrailYear5;
            myChart.update();
            
        });
        
        $("#monthlyBookAmortisation").on("change", function(slideEvt) {
            
            var item = slideEvt.value.newValue;
            var num = Number(item);
            
            $("#monthlyBookAmortisation-val").text(num);
            
            monthlyBookAmortisation = num;
            
            calculate();
            
            myChart.data.datasets[1].data[0] = OSTrailYear1;
            myChart.data.datasets[1].data[1] = OSTrailYear2;
            myChart.data.datasets[1].data[2] = OSTrailYear3;
            myChart.data.datasets[1].data[3] = OSTrailYear4;
            myChart.data.datasets[1].data[4] = OSTrailYear5;
            myChart.data.datasets[3].data[0] = RRTrailYear1;
            myChart.data.datasets[3].data[1] = RRTrailYear2;
            myChart.data.datasets[3].data[2] = RRTrailYear3;
            myChart.data.datasets[3].data[3] = RRTrailYear4;
            myChart.data.datasets[3].data[4] = RRTrailYear5;
            myChart.update();
            
        });
        
        $("#fpReferrals").on("change", function(slideEvt) {
            
            var item = slideEvt.value.newValue;
            var num = Number(item).toLocaleString("en");
            
            $("#fpReferrals-val").text(num);
            
            fpReferrals = item;
            
            calculate();
            
            myChart2.data.datasets[0].data[0] = (fpRate*fpReferrals)*12;
            myChart2.data.datasets[0].data[1] = (fpRate*fpReferrals)*12;
            myChart2.data.datasets[0].data[2] = (fpRate*fpReferrals)*12;
            myChart2.data.datasets[0].data[3] = (fpRate*fpReferrals)*12;
            myChart2.data.datasets[0].data[4] = (fpRate*fpReferrals)*12;
            myChart2.update();
            
        });
        
        $("#settlementReferrals").on("change", function(slideEvt) {
            
            var item = slideEvt.value.newValue;
            var num = Number(item).toLocaleString("en");
            
            $("#settlementReferrals-val").text(num);
            
            settlementReferrals = item;
            
            calculate();
            
            myChart2.data.datasets[1].data[0] = (settlementRate*settlementReferrals)*12;
            myChart2.data.datasets[1].data[1] = (settlementRate*settlementReferrals)*12;
            myChart2.data.datasets[1].data[2] = (settlementRate*settlementReferrals)*12;
            myChart2.data.datasets[1].data[3] = (settlementRate*settlementReferrals)*12;
            myChart2.data.datasets[1].data[4] = (settlementRate*settlementReferrals)*12;
            myChart2.update();
            
        });
        
        $("#aliReferrals").on("change", function(slideEvt) {
            
            var item = slideEvt.value.newValue;
            var num = Number(item).toLocaleString("en");
            
            $("#aliReferrals-val").text(num);
            
            aliReferrals = item;
            
            calculate();
            
            myChart2.data.datasets[2].data[0] = (aliRate*aliReferrals)*12;
            myChart2.data.datasets[2].data[1] = (aliRate*aliReferrals)*12;
            myChart2.data.datasets[2].data[2] = (aliRate*aliReferrals)*12;
            myChart2.data.datasets[2].data[3] = (aliRate*aliReferrals)*12;
            myChart2.data.datasets[2].data[4] = (aliRate*aliReferrals)*12;
            myChart2.update();
            
        });
        
        $("#homecontentsReferrals").on("change", function(slideEvt) {
            
            var item = slideEvt.value.newValue;
            var num = Number(item).toLocaleString("en");
            
            $("#homecontentsReferrals-val").text(num);
            
            homecontentsReferrals = item;
            
            calculate();
            
            myChart2.data.datasets[3].data[0] = (homecontentsRate*homecontentsReferrals)*12;
            myChart2.data.datasets[3].data[1] = (homecontentsRate*homecontentsReferrals)*12;
            myChart2.data.datasets[3].data[2] = (homecontentsRate*homecontentsReferrals)*12;
            myChart2.data.datasets[3].data[3] = (homecontentsRate*homecontentsReferrals)*12;
            myChart2.data.datasets[3].data[4] = (homecontentsRate*homecontentsReferrals)*12;
            myChart2.update();
            
        });
        
        $("#builderReferrals").on("change", function(slideEvt) {
            
            var item = slideEvt.value.newValue;
            var num = Number(item).toLocaleString("en");
            
            $("#builderReferrals-val").text(num);
            
            builderReferrals = item;
            
            calculate();
            
            myChart2.data.datasets[4].data[0] = (builderRate*builderReferrals)*12;
            myChart2.data.datasets[4].data[1] = (builderRate*builderReferrals)*12;
            myChart2.data.datasets[4].data[2] = (builderRate*builderReferrals)*12;
            myChart2.data.datasets[4].data[3] = (builderRate*builderReferrals)*12;
            myChart2.data.datasets[4].data[4] = (builderRate*builderReferrals)*12;
            myChart2.update();
            
        });
        
        // add commas to currency values
        $("div .value").each(function() {
            
            var item = $(this).text();
            var num = Number(item).toLocaleString("en");
            
            $(this).text(num);
            
        });
        
        $("#assumptions").on("click", function() {
                
            $("#total-table").addClass("hideme");
            $("#totalChartWrap").addClass("hideme");
            $("#referralChartWrap").addClass("hideme");
            $("#referral-sliders").addClass("hideme");
            $("#mortgageChartWrap").addClass("hideme");
            $("#mortgage-sliders").addClass("hideme");
            $("#assumption-sliders").removeClass("hideme");
            $("#instructionsWrap").removeClass("hideme");
            $("#print").prop("disabled", true);
            
        });
        
        $("#mortgage").on("click", function() {
                
            calculate();
            
            $("#instructionsWrap").addClass("hideme");
            $("#assumption-sliders").addClass("hideme");
            $("#total-table").addClass("hideme");
            $("#totalChartWrap").addClass("hideme");
            $("#referralChartWrap").addClass("hideme");
            $("#referral-sliders").addClass("hideme");
            $("#mortgageChartWrap").removeClass("hideme");
            $("#mortgage-sliders").removeClass("hideme");
            $("#print").prop("disabled", true);
            
            myChart.data.datasets[0].data[0] = OSUpfrontYear1;
            myChart.data.datasets[0].data[1] = OSUpfrontYear2;
            myChart.data.datasets[0].data[2] = OSUpfrontYear3;
            myChart.data.datasets[0].data[3] = OSUpfrontYear4;
            myChart.data.datasets[0].data[4] = OSUpfrontYear5;
            myChart.data.datasets[1].data[0] = OSTrailYear1;
            myChart.data.datasets[1].data[1] = OSTrailYear2;
            myChart.data.datasets[1].data[2] = OSTrailYear3;
            myChart.data.datasets[1].data[3] = OSTrailYear4;
            myChart.data.datasets[1].data[4] = OSTrailYear5;
            myChart.data.datasets[2].data[0] = RRUpfrontYear1;
            myChart.data.datasets[2].data[1] = RRUpfrontYear2;
            myChart.data.datasets[2].data[2] = RRUpfrontYear3;
            myChart.data.datasets[2].data[3] = RRUpfrontYear4;
            myChart.data.datasets[2].data[4] = RRUpfrontYear5;
            myChart.data.datasets[3].data[0] = RRTrailYear1;
            myChart.data.datasets[3].data[1] = RRTrailYear2;
            myChart.data.datasets[3].data[2] = RRTrailYear3;
            myChart.data.datasets[3].data[3] = RRTrailYear4;
            myChart.data.datasets[3].data[4] = RRTrailYear5;
            myChart.update();
            
        });
        
        $("#referral").on("click", function() {
                
            $("#instructionsWrap").addClass("hideme");
            $("#assumption-sliders").addClass("hideme");
            $("#total-table").addClass("hideme");
            $("#totalChartWrap").addClass("hideme");
            $("#mortgageChartWrap").addClass("hideme");
            $("#mortgage-sliders").addClass("hideme");
            $("#referralChartWrap").removeClass("hideme");
            $("#referral-sliders").removeClass("hideme");
            $("#print").prop("disabled", true);
            
        });
        
        $("#total").on("click", function() {
                
            calculate();
            
            $("#instructionsWrap").addClass("hideme");
            $("#assumption-sliders").addClass("hideme");
            $("#referralChartWrap").addClass("hideme");
            $("#referral-sliders").addClass("hideme");
            $("#mortgageChartWrap").addClass("hideme");
            $("#mortgage-sliders").addClass("hideme");
            $("#totalChartWrap").removeClass("hideme");
            $("#total-table").removeClass("hideme");
            $("#print").prop("disabled", false);
            
            myChart3.data.datasets[0].data[0] = OSUpfrontYear1+OSTrailYear1+RRUpfrontYear1+RRTrailYear1;
            myChart3.data.datasets[0].data[1] = OSUpfrontYear2+OSTrailYear2+RRUpfrontYear2+RRTrailYear2;
            myChart3.data.datasets[0].data[2] = OSUpfrontYear3+OSTrailYear3+RRUpfrontYear3+RRTrailYear3;
            myChart3.data.datasets[0].data[3] = OSUpfrontYear4+OSTrailYear4+RRUpfrontYear4+RRTrailYear4;
            myChart3.data.datasets[0].data[4] = OSUpfrontYear5+OSTrailYear5+RRUpfrontYear5+RRTrailYear5;
            myChart3.data.datasets[1].data[0] = ReferralsYear1;
            myChart3.data.datasets[1].data[1] = ReferralsYear2;
            myChart3.data.datasets[1].data[2] = ReferralsYear3;
            myChart3.data.datasets[1].data[3] = ReferralsYear4;
            myChart3.data.datasets[1].data[4] = ReferralsYear5;
            myChart3.update();
            
        });
        
        $("#print").on("click", function() {
            
            var printRange = "";
            
            printRange += "#totalChartWrap, #total-table";
                
            $(printRange).printThis({

                    importCSS: true,
                    importStyle: true,
                    canvas: true,
                    header: "<h2>Diversification Calculator</h2><br><br>",
                    footer: "<br><br>" + new Date($.now())

            });
                
        });
        
        function calculate () {
            
            OSUpfrontYear1 = 0;
            OSUpfrontYear2 = 0;
            OSUpfrontYear3 = 0;
            OSUpfrontYear4 = 0;
            OSUpfrontYear5 = 0;
            OSTrailYear1 = 0;
            OSTrailYear2 = 0;
            OSTrailYear3 = 0;
            OSTrailYear4 = 0;
            OSTrailYear5 = 0;
            RRUpfrontYear1 = 0;
            RRUpfrontYear2 = 0;
            RRUpfrontYear3 = 0;
            RRUpfrontYear4 = 0;
            RRUpfrontYear5 = 0;
            RRTrailYear1 = 0;
            RRTrailYear2 = 0;
            RRTrailYear3 = 0;
            RRTrailYear4 = 0;
            RRTrailYear5 = 0;
            ReferralsYear1 = 0;
            ReferralsYear2 = 0;
            ReferralsYear3 = 0;
            ReferralsYear4 = 0;
            ReferralsYear5 = 0;
            TotalIncomeYear1 = 0;
            TotalIncomeYear2 = 0;
            TotalIncomeYear3 = 0;
            TotalIncomeYear4 = 0;
            TotalIncomeYear5 = 0;
            
            // MONTHLY VALUES
            
            // OS Upfront
            $("#data-table tbody tr td:nth-child(2)").each(function() {
                
                $(this).text(((avgMortgageSize*avgOSSettlements)*avgUpfront)*splitOS);
                
            });
            
            // RR Upfront
            $("#data-table tbody tr td:nth-child(4)").each(function() {
                
                $(this).text(((avgMortgageSize*avgRRSettlements)*avgUpfront)*splitRR);
                
            });
            
            // OS Book Amortisation
            // FIRST ROW ONLY
            $("#data-table tbody tr:first-child td:nth-child(9)").each(function() {
                
                $(this).text((existingBookSize+(avgMortgageSize*avgOSSettlements))*(monthlyBookAmortisation/100));
                
            });
            
            // RR Book Amortisation
            // FIRST ROW ONLY
            $("#data-table tbody tr:first-child td:nth-child(10)").each(function() {
                
                $(this).text((existingBookSize+(avgMortgageSize*avgRRSettlements))*(monthlyBookAmortisation/100));
                
            });
            
            // OS Book Size
            // FIRST ROW ONLY
            $("#data-table tbody tr:first-child td:nth-child(6)").each(function() {
                
                $(this).text((existingBookSize+(avgMortgageSize*avgOSSettlements)-$("#data-table tbody tr:first-child td:nth-child(9)").text()));
                
            });
            
            // RR Book Size
            // FIRST ROW ONLY
            $("#data-table tbody tr:first-child td:nth-child(7)").each(function() {
                
                $(this).text((existingBookSize+(avgMortgageSize*avgRRSettlements)-$("#data-table tbody tr:first-child td:nth-child(10)").text()));
                
            });
            
            // ALL OTHER ROWS
            $("#data-table tbody tr:not(:first-child)").each(function() {
                
                var prevOSBookSize = $(this).closest("tr").prev().children("td:eq(4)").text();
                var prevOSBookSizeNum = Number(prevOSBookSize);
                var prevRRBookSize = $(this).closest("tr").prev().children("td:eq(5)").text();
                var prevRRBookSizeNum = Number(prevRRBookSize);
                
                // OS Book Amortisation
                
                $(this).closest("tr").children("td:eq(7)").text(((avgMortgageSize*avgOSSettlements)+prevOSBookSizeNum)*(monthlyBookAmortisation/100));
                
                // OS Book Size
                
                var OSBookAmort = $(this).closest("tr").children("td:eq(7)").text();
                var OSBookAmortNum = Number(OSBookAmort);
                
                $(this).closest("tr").children("td:eq(4)").text(((avgMortgageSize*avgOSSettlements)+prevOSBookSizeNum)-OSBookAmortNum);
                
                // RR Book Amortisation
                
                $(this).closest("tr").children("td:eq(8)").text(((avgMortgageSize*avgRRSettlements)+prevRRBookSizeNum)*(monthlyBookAmortisation/100));
                
                // RR Book Size
                
                var RRBookAmort = $(this).closest("tr").children("td:eq(8)").text();
                var RRBookAmortNum = Number(RRBookAmort);
                
                $(this).closest("tr").children("td:eq(5)").text(((avgMortgageSize*avgRRSettlements)+prevRRBookSizeNum)-RRBookAmortNum);
                
            });
            
            // OS Trail
            $("#data-table tbody tr td:nth-child(3)").each(function() {
        
                var OSBookSize = $(this).closest("tr").children("td:eq(4)").text();
                var OSBookSizeNum = Number(OSBookSize);
                
                $(this).text(((OSBookSizeNum*avgTrail)*splitOS)/12);
                
            });
            
            // RR Trail
            $("#data-table tbody tr td:nth-child(5)").each(function() {
        
                var RRBookSize = $(this).closest("tr").children("td:eq(5)").text();
                var RRBookSizeNum = Number(RRBookSize);
                
                $(this).text(((RRBookSizeNum*avgTrail)*splitRR)/12);
                
            });
            
            // Total Book Size
            $("#data-table tbody tr td:nth-child(8)").each(function() {
        
                var OSBookSize = $(this).closest("tr").children("td:eq(4)").text();
                var RRBookSize = $(this).closest("tr").children("td:eq(5)").text();
                var OSBookSizeNum = Number(OSBookSize);
                var RRBookSizeNum = Number(RRBookSize);
                
                $(this).text(OSBookSizeNum+RRBookSizeNum);
                
            });
            
            // Total Book Amortisation
            $("#data-table tbody tr td:nth-child(11)").each(function() {
        
                var OSAmort = $(this).closest("tr").children("td:eq(7)").text();
                var RRAmort = $(this).closest("tr").children("td:eq(8)").text();
                var OSAmortNum = Number(OSAmort);
                var RRAmortNum = Number(RRAmort);
                
                $(this).text(OSAmortNum+RRAmortNum);
                
            });
            
            // Referrals
            $("#data-table tbody tr td:nth-child(12)").each(function() {
                
                $(this).text((fpRate*fpReferrals)+(settlementRate*settlementReferrals)+(aliRate*aliReferrals)+(homecontentsRate*homecontentsReferrals)+(builderRate*builderReferrals));
                
            });
            
            // Total Income
            $("#data-table tbody tr td:nth-child(13)").each(function() {
                
                var OSUpfront = Number($(this).closest("tr").children("td:eq(0)").text());
                var OSTrail = Number($(this).closest("tr").children("td:eq(1)").text());
                var RRUpfront = Number($(this).closest("tr").children("td:eq(2)").text());
                var RRTrail = Number($(this).closest("tr").children("td:eq(3)").text());
                var Referrals = Number($(this).closest("tr").children("td:eq(10)").text());
                
                $(this).text((OSUpfront+OSTrail+RRUpfront+RRTrail+Referrals));
                
            });
            
            //TOTALS BY YEAR
            
            // OS Upfront
            // Total Upfront Over Year 1
            $("table .OSUpfrontYear1").each(function() {

                var value = $(this).text();

                // add only if the value is number
                if(!isNaN(value) && value.length !== 0) {
                    OSUpfrontYear1 += parseFloat(value);
                }

            });
            
            // Total Upfront Over Year 2
            $("table .OSUpfrontYear2").each(function() {

                var value = $(this).text();

                // add only if the value is number
                if(!isNaN(value) && value.length !== 0) {
                    OSUpfrontYear2 += parseFloat(value);
                }

            });
            
            // Total Upfront Over Year 3
            $("table .OSUpfrontYear3").each(function() {

                var value = $(this).text();

                // add only if the value is number
                if(!isNaN(value) && value.length !== 0) {
                    OSUpfrontYear3 += parseFloat(value);
                }

            });
            
            // Total Upfront Over Year 4
            $("table .OSUpfrontYear4").each(function() {

                var value = $(this).text();

                // add only if the value is number
                if(!isNaN(value) && value.length !== 0) {
                    OSUpfrontYear4 += parseFloat(value);
                }

            });
            
            // Total Upfront Over Year 5
            $("table .OSUpfrontYear5").each(function() {

                var value = $(this).text();

                // add only if the value is number
                if(!isNaN(value) && value.length !== 0) {
                    OSUpfrontYear5 += parseFloat(value);
                }

            });
            
            // OS Trail
            // Total Trail Over Year 1
            $("table .OSTrailYear1").each(function() {

                var value = $(this).text();

                // add only if the value is number
                if(!isNaN(value) && value.length !== 0) {
                    OSTrailYear1 += parseFloat(value);
                }

            });

            // Total Trail Over Year 2
            $("table .OSTrailYear2").each(function() {

                var value = $(this).text();

                // add only if the value is number
                if(!isNaN(value) && value.length !== 0) {
                    OSTrailYear2 += parseFloat(value);
                }

            });

            // Total Trail Over Year 3
            $("table .OSTrailYear3").each(function() {

                var value = $(this).text();

                // add only if the value is number
                if(!isNaN(value) && value.length !== 0) {
                    OSTrailYear3 += parseFloat(value);
                }

            });

            // Total Trail Over Year 4
            $("table .OSTrailYear4").each(function() {

                var value = $(this).text();

                // add only if the value is number
                if(!isNaN(value) && value.length !== 0) {
                    OSTrailYear4 += parseFloat(value);
                }

            });

            // Total Trail Over Year 5
            $("table .OSTrailYear5").each(function() {

                var value = $(this).text();

                // add only if the value is number
                if(!isNaN(value) && value.length !== 0) {
                    OSTrailYear5 += parseFloat(value);
                }

            });
            
            // RR Upfront
            // Total Upfront Over Year 1
            $("table .RRUpfrontYear1").each(function() {

                var value = $(this).text();

                // add only if the value is number
                if(!isNaN(value) && value.length !== 0) {
                    RRUpfrontYear1 += parseFloat(value);
                }

            });
            
            // Total Upfront Over Year 2
            $("table .RRUpfrontYear2").each(function() {

                var value = $(this).text();

                // add only if the value is number
                if(!isNaN(value) && value.length !== 0) {
                    RRUpfrontYear2 += parseFloat(value);
                }

            });
            
            // Total Upfront Over Year 3
            $("table .RRUpfrontYear3").each(function() {

                var value = $(this).text();

                // add only if the value is number
                if(!isNaN(value) && value.length !== 0) {
                    RRUpfrontYear3 += parseFloat(value);
                }

            });
            
            // Total Upfront Over Year 4
            $("table .RRUpfrontYear4").each(function() {

                var value = $(this).text();

                // add only if the value is number
                if(!isNaN(value) && value.length !== 0) {
                    RRUpfrontYear4 += parseFloat(value);
                }

            });
            
            // Total Upfront Over Year 5
            $("table .RRUpfrontYear5").each(function() {

                var value = $(this).text();

                // add only if the value is number
                if(!isNaN(value) && value.length !== 0) {
                    RRUpfrontYear5 += parseFloat(value);
                }

            });
            
            // RR Trail
            // Total Trail Over Year 1
            $("table .RRTrailYear1").each(function() {

                var value = $(this).text();

                // add only if the value is number
                if(!isNaN(value) && value.length !== 0) {
                    RRTrailYear1 += parseFloat(value);
                }

            });

            // Total Trail Over Year 2
            $("table .RRTrailYear2").each(function() {

                var value = $(this).text();

                // add only if the value is number
                if(!isNaN(value) && value.length !== 0) {
                    RRTrailYear2 += parseFloat(value);
                }

            });

            // Total Trail Over Year 3
            $("table .RRTrailYear3").each(function() {

                var value = $(this).text();

                // add only if the value is number
                if(!isNaN(value) && value.length !== 0) {
                    RRTrailYear3 += parseFloat(value);
                }

            });

            // Total Trail Over Year 4
            $("table .RRTrailYear4").each(function() {

                var value = $(this).text();

                // add only if the value is number
                if(!isNaN(value) && value.length !== 0) {
                    RRTrailYear4 += parseFloat(value);
                }

            });

            // Total Trail Over Year 5
            $("table .RRTrailYear5").each(function() {

                var value = $(this).text();

                // add only if the value is number
                if(!isNaN(value) && value.length !== 0) {
                    RRTrailYear5 += parseFloat(value);
                }

            });
            
            // Referrals
            // Total Referrals Over Year 1
            $("table .ReferralsYear1").each(function() {

                var value = $(this).text();

                // add only if the value is number
                if(!isNaN(value) && value.length !== 0) {
                    ReferralsYear1 += parseFloat(value);
                }

            });
            
            // Total Referrals Over Year 2
            $("table .ReferralsYear2").each(function() {

                var value = $(this).text();

                // add only if the value is number
                if(!isNaN(value) && value.length !== 0) {
                    ReferralsYear2 += parseFloat(value);
                }

            });
            
            // Total Referrals Over Year 3
            $("table .ReferralsYear3").each(function() {

                var value = $(this).text();

                // add only if the value is number
                if(!isNaN(value) && value.length !== 0) {
                    ReferralsYear3 += parseFloat(value);
                }

            });
            
            // Total Referrals Over Year 4
            $("table .ReferralsYear4").each(function() {

                var value = $(this).text();

                // add only if the value is number
                if(!isNaN(value) && value.length !== 0) {
                    ReferralsYear4 += parseFloat(value);
                }

            });
            
            // Total Referrals Over Year 5
            $("table .ReferralsYear5").each(function() {

                var value = $(this).text();

                // add only if the value is number
                if(!isNaN(value) && value.length !== 0) {
                    ReferralsYear5 += parseFloat(value);
                }

            });
            
            // Total Income
            // Total Income Over Year 1
            $("table .TotalIncomeYear1").each(function() {

                var value = $(this).text();

                // add only if the value is number
                if(!isNaN(value) && value.length !== 0) {
                    TotalIncomeYear1 += parseFloat(value);
                }

            });
            
            // Total Income Over Year 2
            $("table .TotalIncomeYear2").each(function() {

                var value = $(this).text();

                // add only if the value is number
                if(!isNaN(value) && value.length !== 0) {
                    TotalIncomeYear2 += parseFloat(value);
                }

            });
            
            // Total Income Over Year 3
            $("table .TotalIncomeYear3").each(function() {

                var value = $(this).text();

                // add only if the value is number
                if(!isNaN(value) && value.length !== 0) {
                    TotalIncomeYear3 += parseFloat(value);
                }

            });
            
            // Total Income Over Year 4
            $("table .TotalIncomeYear4").each(function() {

                var value = $(this).text();

                // add only if the value is number
                if(!isNaN(value) && value.length !== 0) {
                    TotalIncomeYear4 += parseFloat(value);
                }

            });
            
            // Total Income Over Year 5
            $("table .TotalIncomeYear5").each(function() {

                var value = $(this).text();

                // add only if the value is number
                if(!isNaN(value) && value.length !== 0) {
                    TotalIncomeYear5 += parseFloat(value);
                }

            });
            
            // Total Table
            // Mortgages
            $("#total-table .TotalMortgagesYear1").each(function() {
        
                $(this).text(OSUpfrontYear1+OSTrailYear1+RRUpfrontYear1+RRTrailYear1);
                
            });
            
            $("#total-table .TotalMortgagesYear2").each(function() {
        
                $(this).text(OSUpfrontYear2+OSTrailYear2+RRUpfrontYear2+RRTrailYear2);
                
            });
            
            $("#total-table .TotalMortgagesYear3").each(function() {
        
                $(this).text(OSUpfrontYear3+OSTrailYear3+RRUpfrontYear3+RRTrailYear3);
                
            });
            
            $("#total-table .TotalMortgagesYear4").each(function() {
        
                $(this).text(OSUpfrontYear4+OSTrailYear4+RRUpfrontYear4+RRTrailYear4);
                
            });
            
            $("#total-table .TotalMortgagesYear5").each(function() {
        
                $(this).text(OSUpfrontYear5+OSTrailYear5+RRUpfrontYear5+RRTrailYear5);
                
            });
            
            // Referrals
            $("#total-table .TotalReferralsYear1").each(function() {
        
                $(this).text(ReferralsYear1);
                
            });
            
            $("#total-table .TotalReferralsYear2").each(function() {
        
                $(this).text(ReferralsYear2);
                
            });
            
            $("#total-table .TotalReferralsYear3").each(function() {
        
                $(this).text(ReferralsYear3);
                
            });
            
            $("#total-table .TotalReferralsYear4").each(function() {
        
                $(this).text(ReferralsYear4);
                
            });
            
            $("#total-table .TotalReferralsYear5").each(function() {
        
                $(this).text(ReferralsYear5);
                
            });
            
            // Totals
            $("#total-table .TotalYear1").each(function() {
        
                $(this).text(OSUpfrontYear1+OSTrailYear1+RRUpfrontYear1+RRTrailYear1+ReferralsYear1);
                
            });
            
            $("#total-table .TotalYear2").each(function() {
        
                $(this).text(OSUpfrontYear2+OSTrailYear2+RRUpfrontYear2+RRTrailYear2+ReferralsYear2);
                
            });
            
            $("#total-table .TotalYear3").each(function() {
        
                $(this).text(OSUpfrontYear3+OSTrailYear3+RRUpfrontYear3+RRTrailYear3+ReferralsYear3);
                
            });
            
            $("#total-table .TotalYear4").each(function() {
        
                $(this).text(OSUpfrontYear4+OSTrailYear4+RRUpfrontYear4+RRTrailYear4+ReferralsYear4);
                
            });
            
            $("#total-table .TotalYear5").each(function() {
        
                $(this).text(OSUpfrontYear5+OSTrailYear5+RRUpfrontYear5+RRTrailYear5+ReferralsYear5);
                
            });
            
            $("table .value").each(function() {
            
            var item = $(this).text();
            var dec = parseFloat(item).toFixed(2);
            var num = Number(dec).toLocaleString("en");
            
            $(this).text(num);
            
            });
                        
        };
//var middle = $('#middle')

// made a for loop to populate data dynamically on top 10 crypto coins in a hardcoded table using bulma 

function renderCrypto(obj){
    var cryptoBodyElement = $('<tbody>').attr('id', 'crypto-body');
    let boxEl = $('<div>').addClass('column  is-half');
    let containerEl = $('<div>').addClass('middle-box box ');
    let tableEl = $('<table>').addClass('table');
    tableEl.attr('id', 'crypto-table');

    let trEl = $('<tr>');
    let thEl = $('<th>').text('Crypto Image');
    trEl.append(thEl);

    thEl = $('<th>').text('Crypto Coin');
    trEl.append(thEl);
    
    // thEl = $('<th>').text('Market Cap Rank');
    // trEl.append(thEl);

    thEl = $('<th>').text('Current Market Price');
    trEl.append(thEl);

    thEl = $('<th>').text('Price Change in Last 24hrs');
    trEl.append(thEl);

    let theadEl = $('<thead>').append(trEl);
    tableEl.append(theadEl);


    for ( var i=0; i<10; i++){
        var tableRowElement = $("<tr>")
        var tableDataElement = $("<td>").append($('<img>').attr("src", obj[i].image))
        tableRowElement.append(tableDataElement)
        tableDataElement = $("<td>").text(obj[i].name);
        tableRowElement.append(tableDataElement)
        // tableDataElement = $("<td>").text(obj[i].market_cap_rank);
        // tableRowElement.append(tableDataElement)
        var n = (new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(obj[i].current_price));
        tableDataElement = $("<td>").text(n);
        tableDataElement.attr("id", `coinPrice${i}`)
        tableRowElement.append(tableDataElement)
        var n = (new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(obj[i].price_change_24h));
        tableDataElement = $("<td>").text(n);
        tableDataElement.attr("id", `coinPriceChange${i}`)
        tableRowElement.append(tableDataElement)
        cryptoBodyElement.append(tableRowElement)
    }
    tableEl.append(cryptoBodyElement);
    //return cryptoBodyElement;

//     //Object 0 - Coin 1 of 10
    
//     var pEl = $('<img>').attr("src", obj[0].image);
//     containerEl.append(pEl)
    
//     pEl = $('<p>').text(`Crypto Coin 1: ${obj[0].name}`);
//     containerEl.append(pEl)

//     pEl = $('<p>').text(`Market Cap Rank: ${obj[0].market_cap_rank}`);
//     containerEl.append(pEl)

//     pEl = $('<p>').text(`Current Market Price: ${obj[0].current_price}`);
//     containerEl.append(pEl)

//     pEl = $('<p>').text(`Price Change in Last 24 hours: ${obj[0].price_change_24h}`);
//     containerEl.append(pEl)
    
//     //Object 1 - Coin 2 of 10
    
//     pEl = $('<img>').attr("src", obj[1].image);
//     containerEl.append(pEl)
        
//     pEl = $('<p>').text(`Crypto Coin 2: ${obj[1].name}`);
//     containerEl.append(pEl)
    
//     pEl = $('<p>').text(`Market Cap Rank: ${obj[1].market_cap_rank}`);
//     containerEl.append(pEl)
    
//     pEl = $('<p>').text(`Current Market Price: ${obj[1].current_price}`);
//     containerEl.append(pEl)
    
//     pEl = $('<p>').text(`Price Change in Last 24 hours: ${obj[1].price_change_24h}`);
//     containerEl.append(pEl)

//     //Object 2 - Coin 3 of 15
    
//     pEl = $('<img>').attr("src", obj[2].image);
//     containerEl.append(pEl)
        
//     pEl = $('<p>').text(`Crypto Coin 3: ${obj[2].name}`);
//     containerEl.append(pEl)
    
//     pEl = $('<p>').text(`Market Cap Rank: ${obj[2].market_cap_rank}`);
//     containerEl.append(pEl)
    
//     pEl = $('<p>').text(`Current Market Price: ${obj[2].current_price}`);
//     containerEl.append(pEl)
    
//     pEl = $('<p>').text(`Price Change in Last 24 hours: ${obj[2].price_change_24h}`);
//     containerEl.append(pEl)    

//     //Object 3 - Coin 4 of 10
    
//     pEl = $('<img>').attr("src", obj[3].image);
//     containerEl.append(pEl)
        
//     pEl = $('<p>').text(`Crypto Coin 4: ${obj[3].name}`);
//     containerEl.append(pEl)
    
//     pEl = $('<p>').text(`Market Cap Rank: ${obj[3].market_cap_rank}`);
//     containerEl.append(pEl)
    
//     pEl = $('<p>').text(`Current Market Price: ${obj[3].current_price}`);
//     containerEl.append(pEl)
    
//     pEl = $('<p>').text(`Price Change in Last 24 hours: ${obj[3].price_change_24h}`);
//     containerEl.append(pEl)    

// //Object 4 - Coin 5 of 10
    
// pEl = $('<img>').attr("src", obj[4].image);
// containerEl.append(pEl)
    
// pEl = $('<p>').text(`Crypto Coin 5: ${obj[4].name}`);
// containerEl.append(pEl)

// pEl = $('<p>').text(`Market Cap Rank: ${obj[4].market_cap_rank}`);
// containerEl.append(pEl)

// pEl = $('<p>').text(`Current Market Price: ${obj[4].current_price}`);
// containerEl.append(pEl)

// pEl = $('<p>').text(`Price Change in Last 24 hours: ${obj[4].price_change_24h}`);
// containerEl.append(pEl) 

// //Object 5 - Coin 6 of 10
    
// pEl = $('<img>').attr("src", obj[5].image);
// containerEl.append(pEl)
    
// pEl = $('<p>').text(`Crypto Coin 6: ${obj[5].name}`);
// containerEl.append(pEl)

// pEl = $('<p>').text(`Market Cap Rank: ${obj[5].market_cap_rank}`);
// containerEl.append(pEl)

// pEl = $('<p>').text(`Current Market Price: ${obj[5].current_price}`);
// containerEl.append(pEl)

// pEl = $('<p>').text(`Price Change in Last 24 hours: ${obj[5].price_change_24h}`);
// containerEl.append(pEl)   

// //Object 6 - Coin 7 of 10
    
// pEl = $('<img>').attr("src", obj[6].image);
// containerEl.append(pEl)
    
// pEl = $('<p>').text(`Crypto Coin 7: ${obj[6].name}`);
// containerEl.append(pEl)

// pEl = $('<p>').text(`Market Cap Rank: ${obj[6].market_cap_rank}`);
// containerEl.append(pEl)

// pEl = $('<p>').text(`Current Market Price: ${obj[6].current_price}`);
// containerEl.append(pEl)

// pEl = $('<p>').text(`Price Change in Last 24 hours: ${obj[6].price_change_24h}`);
// containerEl.append(pEl)  

// //Object 7 - Coin 8 of 10
    
// pEl = $('<img>').attr("src", obj[7].image);
// containerEl.append(pEl)
    
// pEl = $('<p>').text(`Crypto Coin 8: ${obj[7].name}`);
// containerEl.append(pEl)

// pEl = $('<p>').text(`Market Cap Rank: ${obj[7].market_cap_rank}`);
// containerEl.append(pEl)

// pEl = $('<p>').text(`Current Market Price: ${obj[7].current_price}`);
// containerEl.append(pEl)

// pEl = $('<p>').text(`Price Change in Last 24 hours: ${obj[7].price_change_24h}`);
// containerEl.append(pEl)  

// //Object 8 - Coin 9 of 10
    
// pEl = $('<img>').attr("src", obj[8].image);
// containerEl.append(pEl)
    
// pEl = $('<p>').text(`Crypto Coin 9: ${obj[8].name}`);
// containerEl.append(pEl)

// pEl = $('<p>').text(`Market Cap Rank: ${obj[8].market_cap_rank}`);
// containerEl.append(pEl)

// pEl = $('<p>').text(`Current Market Price: ${obj[8].current_price}`);
// containerEl.append(pEl)

// pEl = $('<p>').text(`Price Change in Last 24 hours: ${obj[8].price_change_24h}`);
// containerEl.append(pEl)  

// //Object 9 - Coin 10 of 10
    
// pEl = $('<img>').attr("src", obj[9].image);
// containerEl.append(pEl)
    
// pEl = $('<p>').text(`Crypto Coin 10: ${obj[9].name}`);
// containerEl.append(pEl)

// pEl = $('<p>').text(`Market Cap Rank: ${obj[9].market_cap_rank}`);
// containerEl.append(pEl)

// pEl = $('<p>').text(`Current Market Price: ${obj[9].current_price}`);
// containerEl.append(pEl)

// pEl = $('<p>').text(`Price Change in Last 24 hours: ${obj[9].price_change_24h}`);
// containerEl.append(pEl)  

//     return containerEl;
//     // middle.append(containerEl)
containerEl.append(tableEl);  
boxEl.append(containerEl);  

    return boxEl;
 }

 async function cryptoRefresh(){
    await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`)
    .then(response => response.json())
    .then(response => resp = response)
    .catch(err => {console.error(err); return err});
    for (var i=0; i<10; i++){
        var n = (new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(resp[i].current_price));
        $(`#coinPrice${i}`).text(n)
        console.log(n)
        var n = (new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(resp[i].price_change_24h));
        $(`#coinPriceChange${i}`).text(n)
        
    }
    
}
// pEl = $('<p>').text(`Price Change in Last 24 hours: ${obj[9].price_change_24h}`);

    // middle.append(containerEl)




// fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//             renderCrypto(data); 
//         } )
//         .catch(err => {console.error(err); return err});
    
    
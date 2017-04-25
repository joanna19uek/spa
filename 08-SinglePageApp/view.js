var view = {
		display: function (data) {
			// create new data view to be displayed
			var cell, text, i, table, header, htext, row;
            var headers = ["Code", "Name", "Rate"];
			this.clear();
            /*
			for (i = 0; i < data.length; i++) {
				elem = document.createElement("h3");
				text = document.createTextNode(
						data[i].code + "/" + data[i].name + " " + data[i].rate
						);
				elem.appendChild(text);
				document.getElementById('dataview').appendChild(elem);
			}
            */
            table = document.createElement("table");
            document.getElementById('dataview').appendChild(table);
            header = document.createElement("hr");
            document.getElementByTagName("table")[0].appendChild(header);
            for (i = 0; i < 3; i++) {
                cell = document.createElement("td");
                htext = document.createTextNode(headers[i]);
                cell.appendChild(htext);
                document.getElementByTagName("hr")[0].appendChild(cell);
            }
            //header = document.createElement("hr");
            for (i = 0; i < data.length; i++) {
				row = document.createElement("tr");
                document.getElementByTagName("table")[0].appendChild(row);
                cell = document.createElement("td");
                text = document.createTextNode(data[i].code);
                cell.appendChild(text);
                document.getElementByTagName("tr")[i].appendChild(cell);
                
                //cell = document.createElement("td");
                
				//text = document.createTextNode(
				//		data[i].code + "/" + data[i].name + " " + data[i].rate
				//		);
				//elem.appendChild(text);
				//document.getElementById('dataview').appendChild(elem);
			}
		},
		clear: function () {
			// remove old data
			var dataView = document.getElementById('dataview');
			while (dataView.firstChild) {
				dataView.removeChild(dataView.firstChild);
			}
		},
		addCurrency: function () {
			var currency = {
					code: document.getElementById('code').value,
					rate: document.getElementById('rate').value,
					name: document.getElementById('name').value
			}
			controller.storeCurrency(currency);
		}
	};

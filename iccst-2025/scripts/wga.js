function wgaVote(id) {
	let obj = {};
        obj.action = "vote";
	obj.id = id;
	obj.secret = wgaSecret;
	$.post(wgaURL, obj, function (data, status) {
		alert(data);
	});
	wgaList(0);
}

function wgaList(delta) {
	wgaOffset += delta;
	wgaOffset = (wgaOffset > 0) ? wgaOffset : 0; 
	$.get(wgaURL + "?action=list&offset=" + wgaOffset, function (data, status) {
		if (status === "success") {
			$("#WGA_CONTENT").html(data);
		} 
	});
}

function wgaDeleteNomination(id) {
	let obj = {};
	obj.id = id
	obj.secret = wgaSecret;
	obj.action = "delete";
	$.post(wgaURL, obj, function (data, status) {
                alert(data);
        });
        wgaList(0);

}

function wgaDetails(id) {
	let obj = {};
	obj.action = "display";
	obj.secret = wgaSecret;
	obj.id = id;
	$.post(wgaURL, obj, function (data, status) {
		if (status  === "success") {
			$("#WGA_CONTENT").html(data);
		}
	});
}

function wgaAddNomination() {
        let obj = {};
	obj.action = "nominate";
        obj.nominee = $("#nominee").val();
        obj.affiliation = $("#affiliation").val();
        obj.contact = $("#contact").val();
        obj.publications = $("#publications").val();
        obj.explanation = $("#explanation").val();
        obj.nominator = $("#nominator").val();
        $.post(wgaURL, obj, function(data, status) {
                alert(data);
        });
}

function wgaSetSecret() {
	wgaSecret = prompt("Please authenticate as a board member", "password");
	let obj = {};
	obj.action = "admin";
	obj.secret = wgaSecret;
	$.post(wgaURL, obj, function(data, status) {
		if (status === "success") {
			$("#WGA_ADMIN").html(data);
		}
	});
}

let wgaURL = "https://www.leibniz-wirkstoffe.de/wga/wga.php";
let wgaOffset = 0;
let wgaAction = "nominate";
let wgaSecret = "public";


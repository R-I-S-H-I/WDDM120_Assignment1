const long = document.getElementById("long").value;
const lat = document.getElementById("lat").value;
const sub_btn = document.querySelector(".submit_btn");
const fecthData = () => {
    fetch(`https://weatherbit-v1-mashape.p.rapidapi.com/alerts?lat=${lat}&lon=${long}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "8d7efb23bbmsh74c2179adf8a2c0p153309jsna428f531eb03",
		"x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response.json());
})
.then(()=>{
    console.log(`${lat} ${long}`);
})
.catch(err => {
	console.error(err);
});
}
sub_btn.addEventListener('click', fecthData);
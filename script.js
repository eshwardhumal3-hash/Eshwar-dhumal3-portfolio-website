const root=document.documentElement;
const themeToggle=document.getElementById("themeToggle");
const savedTheme=localStorage.getItem("ed-theme");
if(savedTheme) root.dataset.theme=savedTheme;
themeToggle.addEventListener("click",()=>{
  const next=root.dataset.theme==="dark"?"light":"dark";
  if(next==="dark") root.dataset.theme="dark"; else delete root.dataset.theme;
  localStorage.setItem("ed-theme",next);
});

document.getElementById("year").textContent=new Date().getFullYear();

const output=document.getElementById("terminalOutput");
const form=document.getElementById("terminalForm");
const input=document.getElementById("terminalInput");

const responses={
  help:["Available commands:","about  — who is Eshwar?","skills — show the toolkit","project — inspect the payroll project","journey — education & experience","contact — get in touch","clear — clear the terminal"],
  about:["Eshwar Dhumal — BBA-CA graduate from Pune.","Focus: data analytics, data exploration and practical problem solving.","Currently pursuing further studies in Data Science & AI."],
  skills:["Python · SQL · JavaScript","Microsoft Excel · Power BI · VS Code · XAMPP","HTML5 · CSS3 · responsive web development"],
  project:["Employee Payroll Management System","Stack: HTML5, CSS3, JavaScript, Python/Django, MySQL","Covers employee records, payroll calculations, salary slips, reporting and access control."],
  journey:["Bachelor’s Degree — Prof. Ramkrishna More Arts, Commerce & Science College (CGPA 7.5)","Web Development Intern — responsive websites, debugging and UX improvements","NASSCOM Data Analyst certification"],
  contact:["Email: eshwardhumal3@gmail.com","Phone: +91 87679 63343","Location: Pune, Maharashtra"]
};

function printCommand(cmd){
  const line=document.createElement("div");
  line.className="cmd";
  line.textContent=`› ${cmd}`;
  output.appendChild(line);
}
function printAnswer(lines){
  lines.forEach(x=>{const line=document.createElement("div");line.className="answer";line.textContent=x;output.appendChild(line)});
  output.scrollTop=output.scrollHeight;
}
form.addEventListener("submit",e=>{
  e.preventDefault();
  const cmd=input.value.trim().toLowerCase();
  if(!cmd)return;
  printCommand(cmd);
  input.value="";
  if(cmd==="clear"){output.innerHTML="";return}
  if(cmd==="hello"||cmd==="hi"){printAnswer(["Hey. Welcome to the little lab.","Try `help`."]);return}
  if(responses[cmd]) printAnswer(responses[cmd]);
  else printAnswer([`Command not found: ${cmd}`,`Try "help" for the available commands.`]);
});

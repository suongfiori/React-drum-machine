const Footer = () => {
    const year = new Date().getFullYear()
    const githubUrl = "https://github.com/suongfiori"
  
    return <footer className="footer">Made by © <a href={githubUrl}> SuongFiori </a> - {year}</footer>
  }

export default Footer
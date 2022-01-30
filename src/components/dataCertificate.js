
import { v4 as uuidv4 } from 'uuid'
// image
import webrebel from '../image/Certificates/cer-webrebel-1.jpg'
import sass from '../image/Certificates/cer-sass.jpg'
import js6 from '../image/Certificates/cer-javascript-es6.jpg'
import git from '../image/Certificates/cer-git-github.jpg'
import react from '../image/Certificates/cer-react.jpg'
import figma from '../image/Certificates/cer-figma.jpg'
import udemy_sudoku from '../image/Certificates/Udemy-sudoku.jpg'
// pdf
import pdf_webrebel from '../pdf/pdf-webrebel-1.pdf'
import pdf_sass from '../pdf/pdf-sass.pdf'
import pdf_es6 from '../pdf/pdf-es6.pdf'
import pdf_git from '../pdf/pdf-git.pdf'
import pdf_react from '../pdf/pdf-react.pdf'
import pdf_figma from '../pdf/pdf-figma.pdf'
import pdf_sudoku from '../pdf/Udemy-sudoku-app.pdf'

function dataCertificate () {
    return [
        {
            id: uuidv4(),
            image: webrebel,
            pdf: pdf_webrebel,
            alt: "Webrebel 1"
        },
        {
            id: uuidv4(),
            image: sass,
            pdf: pdf_sass,
            alt: "Sass"
        },
        {
            id: uuidv4(),
            image: js6,
            pdf: pdf_es6,
            alt: "JS6"
        },
        {
            id: uuidv4(),
            image: git,
            pdf: pdf_git,
            alt: "GitHub"
        },
        {
            id: uuidv4(),
            image: react,
            pdf: pdf_react,
            alt: "React"
        },
        {
            id: uuidv4(),
            image: figma,
            pdf: pdf_figma,
            alt: "Figma"
        },
        {
            id: uuidv4(),
            image: udemy_sudoku,
            pdf: pdf_sudoku,
            alt: "sudoku"
        }
    ]
}

export default dataCertificate

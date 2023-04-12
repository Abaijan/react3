import React, { useState } from 'react'
import './firstBlock.scss'

const FirstBlock = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "Сколько раз в год можно обратиться к терапевту или педеатру по данной программе 1 ?",
      answer: "Количество обращений не всего срока дейсвия договора 1",
      isOpen: false
    },

    {
      id: 2,
      question: "Сколько раз в год можно обратиться к терапевту или педеатру по данной программе 2 ?",
      answer: "Количество обращений не всего срока дейсвия договора answer 2",
      isOpen: false
    },
    {
      id: 3,
      question: "Сколько раз в год можно обратиться к терапевту или педеатру по данной программе 3 ?",
      answer: "Количество обращений не всего срока дейсвия договора answer 3",
      isOpen: false
    },
    {
      id: 4,
      question: "Сколько раз в год можно обратиться к терапевту или педеатру по данной программе 4 ?",
      answer: "Количество обращений не всего срока дейсвия договора answer 4",
      isOpen: false
    },
  ])

  return (
    <div className="firstBlock">
      <div className="container">
        <div className="firstBlock">
          <div className="firstBlock-left">
            <div className="accardion">
              <h1>Часто задаваемые вопросы</h1>
              {
                questions.map(item => (
                  <>
                    <div className='q&a'>
                      <h4 data-id={item.id} onClick={(e) => {
                        item.isOpen = !item.isOpen
                        e.target.nextElementSibling.style.maxHeight = item.isOpen ? "100px" : "0"
                        e.target.nextElementSibling.style.opacity = item.isOpen ? "1" : "0"
                      }}>{item.question}<span className={`${item.isOpen ? "open" : "closed"}`}></span></h4>
                      
                      <div className="section1">
                        <p className='section1p' onClick={(e) => {
                          e.target.parentNode.style.opacity = "0"
                          e.target.parentNode.style.maxHeight = "0"
                        }}>
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </>
                ))
              }
            </div>
          </div>
          {/* <div className="firstBlock-right"></div> */}
        </div>
      </div>
    </div>
  )
}

export default FirstBlock
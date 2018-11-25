import React from 'react'
import Page from '../components/Page'
import Doc from '../components/Doc'
import CardExample from '../patterns/Card/Card'

const CardPage = () => {
  return (
    <Page>
      <Doc
        example={
          <CardExample
            name="Cafe Italia"
            type="Italian"
            price="$$"
            imageSrc="https://uploads.codesandbox.io/uploads/user/5cb9a0d4-583b-4f51-aaa5-feb80db2b623/dobe-restaurant_2.jpg"
            reviews={[
              {
                name: 'Eric Soderberg',
                rating: 3.8,
                date: new Date('11/18/2018'),
                comment:
                  'Almost perfect. Loved the food but did not get any Grommet swags.'
              },
              {
                name: 'Alan Souza',
                rating: 2.4,
                date: new Date('11/17/2018'),
                comment:
                  'I like the food, but the design of the space can be improved.'
              },
              {
                name: 'Chris Carlozzi',
                rating: 5.0,
                date: new Date('11/10/2018'),
                comment: "I'm the owner so I love it."
              },
              {
                name: 'Bryan Jacquot',
                rating: 2.1,
                date: new Date('08/09/2018'),
                comment: 'Does not have delivery in Fort Collins.'
              }
            ]}
            description="Pastas and pizzas from chef Lozzi."
          />
        }
        name="Card"
        description={
          <span>Cards contain content and actions about a single subject.</span>
        }
        link={{
          url: 'https://codesandbox.io/s/o7wjvrj3wy',
          label: 'CodeSandbox'
        }}
      />
    </Page>
  )
}

export default CardPage

import React, { Fragment, useState, useEffect, useRef } from 'react';

const PayPalButton = ({ price, description, clientId, currency, paySubmit }) => {
    const [sdk, setSdk] = useState(false);

    //Paypal state
    const [paidFor] = useState(false);
    const [error, setError] = useState();
    let paypalRef = useRef(null);

    //Product details
    const product = {
        price: price,
        description: description
    }

    //PAYPAL BUTTON RENDER
    const renderPP = () => {
        setSdk(true)
        window.paypal.Buttons({
            style:{
              shape: 'rect',
              color: 'white',
              layout: 'vertical',
              label: 'pay',
            },
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    description: product.description,
                    amount: {
                      value: product.price,
                    },
                  },
                ],
              });
            },
            onApprove: async (data, actions) => {
              const order = await actions.order.capture();
              console.log(order);
              paySubmit(order)
            },
            onError: err => {
              setError(err);
            }
          }).render(paypalRef.current);
    }

    //on Mount loading paypal sdk
    useEffect(() => {
        if (!sdk) {
          const script = document.createElement("script");
          script.src = "https://www.paypal.com/sdk/js?client-id=" + clientId + "&currency=" + currency;
          script.async = true;
          script.onload = () => renderPP();
          document.body.appendChild(script);
        }
        error && console.log(error)
      })

    return (
        <Fragment>
            {sdk && 
                paidFor === false && <div ref={paypalRef}></div>
            }
        </Fragment>
    )
}

export default PayPalButton
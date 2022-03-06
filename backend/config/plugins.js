module.exports = ({ env }) => ({
    // ...
    email: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'myemail@protonmail.com',
        defaultReplyTo: 'myemail@protonmail.com',
      },
    },
    // ...
  });
  
  module.exports = ({ env }) => {
    return {
      'zeasy-image-api': {
        providerOptions: {
          unsplash: {
            appName: env('UNSPLASH_APP_NAME'),
            accessKey: env('UNSPLASH_ACCESS_KEY'),
          },
          giphy: {
            accessKey: env('GIPHY_API_KEY'),
          },
        },
      },
    };
  };
  
  module.exports = () => ({
    //...
    'email-designer': {
      editor: {
        tools: {
          heading: {
            properties: {
              text: {
                value: 'This is the new default text!'
              }
            }
          }
        },
        options: {
          features: {
            colorPicker: {
              presets: ['#D9E3F0', '#F47373', '#697689', '#37D67A']
            }
          },
          fonts: {
            showDefaultFonts: false,
            customFonts: [
              {
                label: "Anton",
                value: "'Anton', sans-serif",
                url: "https://fonts.googleapis.com/css?family=Anton",
              },
              {
                label: "Lato",
                value: "'Lato', Tahoma, Verdana, sans-serif",
                url: "https://fonts.googleapis.com/css?family=Lato",
              },
              // ...
            ],
          },
          mergeTags: [
            {
              name: 'Email',
              value: '{{= USER.username }}',
              sample: 'john@doe.com',
            },
            // ...
          ]
        },
        appearance: {
          theme: "dark",
          panels: {
            tools: {
              dock: 'left'
            }
          }
        }
      }
    },
    // ...
  });
  
  
export const htmlConstructor = (values: any) => {
  const emailHTML = `
    <!DOCTYPE html>
    <html>
    <head>
    <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f2f2f2;
      padding: 20px;
    }

    .container {
      max-width: 500px;
      margin: 0 auto;
      background-color: #ffffff;
      padding: 20px;
      border-radius: 4px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }

    h2 {
      color: #333333;
    }

    .field {
      margin-bottom: 10px;
    }

    .label {
      font-weight: bold;
    }

    .value {
      font-style: italic;
    }
    </style>
    </head>
    <body>
      <div class="container">
        <div class="field">
          <span class="label">Nome:</span>
          <span class="value">${values.name}</span>
        </div>
        <div class="field">
          <span class="label">Email:</span>
          <span class="value">${values.email}</span>
        </div>
        <div class="field">
          <span class="label">Assunto:</span>
          <span class="value">${values.subject}</span>
        </div>
        <div class="field">
          <span class="label">Mensagem:</span>
          <span class="value">${values.msg}</span>
        </div>
        <div class="field">
          <span class="label">Data:</span>
          <span class="value">${getCurrentDateTime()}</span>
        </div>
      </div>
    </body>
    </html>
  `
  return emailHTML
}

export const getCurrentDateTime = (): string => {
  const currentDate = new Date();
  
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month is zero-based
  const year = currentDate.getFullYear();
  
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  
  return `enviada em ${day}/${month}/${year} as ${hours}:${minutes}`;
}
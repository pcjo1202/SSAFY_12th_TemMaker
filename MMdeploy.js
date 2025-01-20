// 웹훅을 통해 메시지 전송
export async function sendWebhook(message) {
  const webhookURL = process.env.MM_WEBHOOK_URL; // GitHub Secrets에 저장된 웹훅 URL을 사용

  const body = {
    text: message,
  };

  try {
    const response = await fetch(webhookURL, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error :', error);
  }
}

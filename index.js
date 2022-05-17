const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.goto(
    'https://www3.bcb.gov.br/CALCIDADAO/publico/exibirFormFinanciamentoPrestacoesFixas.do?method=exibirFormFinanciamentoPrestacoesFixas',
  )
  await page.type('[name="meses"]', '360')
  await page.type('[name="taxaJurosMensal"]', '0,44')
  await page.type('[name="valorFinanciado"]', '12000000')
  await page.screenshot({ path: 'screenshot1.png' })

  await page.click('[name="botaoCalcular"]')
  await page.screenshot({ path: 'screenshot2.png' })

  // await browser.close()
})()

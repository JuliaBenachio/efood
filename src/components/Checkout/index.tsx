import { useEffect } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import InputMask from 'react-input-mask'

import Button from '../Button'
import {
  ButtonContainer,
  CheckoutContainer,
  ConclusaoContainer,
  InputGroup,
  Row
} from './styles'

import { clear, setStep, close } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { usePurchaseMutation } from '../../services/api'
import { formataPreco, getTotalPrice } from '../../utils'

const Checkout = () => {
  const { step } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const form = useFormik({
    enableReinitialize: true,
    validateOnMount: true,
    initialValues: {
      nomeCompleto: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: '',
      nomeCartao: '',
      numeroCartao: '',
      cvv: '',
      mesVencimento: '',
      anoVencimento: ''
    },

    validationSchema: () =>
      Yup.object({
        nomeCompleto:
          step === 'address'
            ? Yup.string()
                .min(5, 'O nome precisa ter pelo menos 5 caracteres')
                .required('Campo obrigatório')
            : Yup.string(),

        endereco:
          step === 'address'
            ? Yup.string().required('Campo obrigatório')
            : Yup.string(),

        cidade:
          step === 'address'
            ? Yup.string().required('Campo obrigatório')
            : Yup.string(),

        cep:
          step === 'address'
            ? Yup.string()
                .min(9, 'O campo precisa ter 8 caracteres')
                .max(9, 'O campo precisa ter 8 caracteres')
                .required('Campo obrigatório')
            : Yup.string(),

        numero:
          step === 'address'
            ? Yup.string().required('Campo obrigatório')
            : Yup.string(),

        complemento: Yup.string(),

        nomeCartao:
          step === 'payment'
            ? Yup.string().min(5).required('Campo obrigatório')
            : Yup.string(),

        numeroCartao:
          step === 'payment'
            ? Yup.string().min(19).max(19).required('Campo obrigatório')
            : Yup.string(),

        cvv:
          step === 'payment'
            ? Yup.string().min(3).max(3).required('Campo obrigatório')
            : Yup.string(),

        mesVencimento:
          step === 'payment'
            ? Yup.string().min(2).max(2).required('Campo obrigatório')
            : Yup.string(),

        anoVencimento:
          step === 'payment'
            ? Yup.string().min(4).max(4).required('Campo obrigatório')
            : Yup.string()
      }),

    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.nomeCompleto,
          address: {
            description: values.endereco,
            city: values.cidade,
            zipCode: values.cep,
            number: Number(values.numero),
            complement: values.complemento
          }
        },
        payment: {
          card: {
            name: values.nomeCartao,
            number: values.numeroCartao,
            code: Number(values.cvv),
            expires: {
              month: Number(values.mesVencimento),
              year: Number(values.anoVencimento)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  return (
    <div>
      {isSuccess && data ? (
        <>
          <CheckoutContainer>
            <h1>Pedido realizado - Pedido n° {data.orderId}</h1>
            <ConclusaoContainer>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </p>
              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </p>
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
            </ConclusaoContainer>
          </CheckoutContainer>
          <ButtonContainer>
            <Button
              title="Clique aqui para concluir o pedido"
              type="button"
              onClick={() => {
                dispatch(close())
                dispatch(setStep('cart'))
                dispatch(clear())
              }}
            >
              Concluir
            </Button>
          </ButtonContainer>
        </>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <>
            {step === 'address' && (
              <>
                <CheckoutContainer>
                  <h1>Entrega</h1>
                  <label htmlFor="nomeCompleto">
                    Quem irá receber o pedido?
                  </label>
                  <input
                    type="text"
                    id="nomeCompleto"
                    name="nomeCompleto"
                    value={form.values.nomeCompleto}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('nomeCompleto') ? 'error' : ''
                    }
                  />
                  <label htmlFor="endereco">Endereço</label>
                  <input
                    type="text"
                    id="endereco"
                    name="endereco"
                    value={form.values.endereco}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('endereco') ? 'error' : ''}
                  />
                  <label htmlFor="cidade">Cidade</label>
                  <input
                    type="text"
                    id="cidade"
                    name="cidade"
                    value={form.values.cidade}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cidade') ? 'error' : ''}
                  />
                  <Row>
                    <InputGroup maxWidth="155px">
                      <label htmlFor="cep">CEP</label>
                      <InputMask
                        type="text"
                        id="cep"
                        name="cep"
                        value={form.values.cep}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('cep') ? 'error' : ''}
                        mask="99999-999"
                        maskChar={null}
                      />
                    </InputGroup>
                    <InputGroup maxWidth="155px">
                      <label htmlFor="numero">Número</label>
                      <input
                        type="number"
                        id="numero"
                        name="numero"
                        value={form.values.numero}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('numero') ? 'error' : ''}
                      />
                    </InputGroup>
                  </Row>
                  <label htmlFor="complemento">Complemento (opcional)</label>
                  <input
                    type="text"
                    id="complemento"
                    name="complemento"
                    value={form.values.complemento}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                </CheckoutContainer>
                <ButtonContainer>
                  <Button
                    title="Clique aqui para continuar com o pagamento"
                    type="button"
                    onClick={() => dispatch(setStep('payment'))}
                    disabled={!form.isValid}
                  >
                    Continuar com o pagamento
                  </Button>
                  <Button
                    title="Clique aqui para voltar ao carrinho"
                    type="button"
                    onClick={() => dispatch(setStep('cart'))}
                  >
                    Voltar para o carrinho
                  </Button>
                </ButtonContainer>
              </>
            )}

            {step === 'payment' && (
              <>
                <CheckoutContainer>
                  <h1>
                    Pagamento - Valor a pagar:{' '}
                    {formataPreco(getTotalPrice(items))}
                  </h1>
                  <label htmlFor="nomeCartao">Nome no cartão</label>
                  <input
                    type="text"
                    id="nomeCartao"
                    name="nomeCartao"
                    value={form.values.nomeCartao}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('nomeCartao') ? 'error' : ''}
                  />
                  <Row>
                    <InputGroup maxWidth="228px">
                      <label htmlFor="numeroCartao">Número do cartão</label>
                      <InputMask
                        type="text"
                        id="numeroCartao"
                        name="numeroCartao"
                        value={form.values.numeroCartao}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('numeroCartao') ? 'error' : ''
                        }
                        mask="9999 9999 9999 9999"
                        maskChar={null}
                      />
                    </InputGroup>
                    <InputGroup maxWidth="87px">
                      <label htmlFor="cvv">CVV</label>
                      <InputMask
                        type="text"
                        id="cvv"
                        name="cvv"
                        value={form.values.cvv}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('cvv') ? 'error' : ''}
                        mask="999"
                        maskChar={null}
                      />
                    </InputGroup>
                  </Row>
                  <Row>
                    <InputGroup maxWidth="155px">
                      <label htmlFor="mesVencimento">Mês de vencimento</label>
                      <InputMask
                        type="text"
                        id="mesVencimento"
                        name="mesVencimento"
                        value={form.values.mesVencimento}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('mesVencimento') ? 'error' : ''
                        }
                        mask="99"
                        maskChar={null}
                      />
                    </InputGroup>
                    <InputGroup maxWidth="155px">
                      <label htmlFor="anoVencimento">Ano de vencimento</label>
                      <InputMask
                        type="text"
                        id="anoVencimento"
                        name="anoVencimento"
                        value={form.values.anoVencimento}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('anoVencimento') ? 'error' : ''
                        }
                        mask="9999"
                        maskChar={null}
                      />
                    </InputGroup>
                  </Row>
                </CheckoutContainer>
                <ButtonContainer>
                  <Button
                    title="Clique aqui para finalizar o pagamento"
                    type="submit"
                    disabled={!form.isValid || isLoading}
                  >
                    {isLoading
                      ? 'Processando a compra...'
                      : 'Finalizar pagamento'}
                  </Button>
                  <Button
                    title="Clique aqui para voltar a edição do endereço"
                    type="button"
                    onClick={() => dispatch(setStep('address'))}
                  >
                    Voltar para a edição do endereço
                  </Button>
                </ButtonContainer>
              </>
            )}
          </>
        </form>
      )}
    </div>
  )
}

export default Checkout

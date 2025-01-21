import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Style from "./results.module.css"

interface ResultsProps {
  results: {
    basalMetabolicRate: number
    maintenanceCalories: number
    targetCalories: number
  }
  onBack: () => void
}

export function Results({ results, onBack }: ResultsProps) {
  return (
    <Card className={Style.cardPrincipal}>
      <CardHeader>
        <CardTitle className={Style.cardTitle}>Resultados</CardTitle>
      </CardHeader>
      <CardContent className={Style.cardContent}>
        <div className={Style.divCardContent}>
          <p>
            ATENÇÃO: Esse valor é apenas uma estimativa e pode variar de acordo com a resposta do organismo. Utilize
            como uma base para iniciar e acompanhe seus resultados para fazer os ajustes necessários.
          </p>
          <p>Uma perda de peso saudável fica por volta de 2kg a 6kg no mês.</p>
        </div>

        <div className="space-y-4">
          <div>
            <h3>TAXA METABÓLICA BASAL</h3>
            <p className="text-sm text-gray-600">
              Calorias que você gasta por dia para as funções vitais do corpo, também conhecida como gasto em repouso
              (não inclui efeito térmico e gasto com atividades físicas)
            </p>
            <p className={Style.results}>{results.basalMetabolicRate} calorias</p>
          </div>

          <div>
            <h3>CALORIAS DE MANUTENÇÃO</h3>
            <p className="text-sm text-gray-600">
              Calorias necessárias por dia para você manter seu peso atual, já considerando seu gasto com atividades
              físicas
            </p>
            <p className={Style.results}>{results.maintenanceCalories} calorias</p>
          </div>

          <div>
            <h3>SUGESTÃO DE CALORIAS</h3>
            <p className="text-sm text-gray-600">
              Calorias que você deve ingerir por dia para chegar no Objetivo escolhido na Calculadora (inclui todos os
              gastos e o Déficit Calórico)
            </p>
            <p className={Style.results}>{results.targetCalories} calorias</p>
          </div>
        </div>

        <div className="flex gap-4">
          <Button onClick={onBack} className="bg-emerald-500 hover:bg-emerald-600">
            Voltar
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}


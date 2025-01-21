"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { calculateCalories } from "../utils/calculations"
import Style from "./components.module.css"

interface FormData {
  weight: string
  height: string
  age: string
  sex: string
  activityLevel: string
  goal: string
}

interface CalorieFormProps {
  onCalculate: (results: any) => void
}

export function CalorieForm({ onCalculate }: CalorieFormProps) {
  const [formData, setFormData] = useState<FormData>({
    weight: "",
    height: "",
    age: "",
    sex: "",
    activityLevel: "",
    goal: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const results = calculateCalories(
      Number(formData.weight),
      Number(formData.height),
      Number(formData.age),
      formData.sex as "male" | "female",
      formData.activityLevel,
      formData.goal,
    )
    onCalculate(results)
  }

  return (
    <Card className={Style.cardPrincipal}>
      <CardHeader>
        <CardTitle className={Style.cardTitle}>Calcule suas Calorias</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className={Style.form}>
          <div className={Style.divInput}>
            <Label htmlFor="weight">Peso (kg)</Label>
            <Input
              id="weight"
              type="number"
              placeholder="Utilize ponto e não vírgula"
              value={formData.weight}
              onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
              required
            />
          </div>

          <div className={Style.divInput}>
            <Label htmlFor="height">Altura (cm)</Label>
            <Input
              id="height"
              type="number"
              placeholder="Utilize ponto e não vírgula"
              value={formData.height}
              onChange={(e) => setFormData({ ...formData, height: e.target.value })}
              required
            />
          </div>

          <div className={Style.divInput}>
            <Label htmlFor="age">Idade</Label>
            <Input
              id="age"
              type="number"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              required
            />
          </div>

          <div className={Style.divInput}>
            <Label htmlFor="sex">Sexo</Label>
            <Select onValueChange={(value) => setFormData({ ...formData, sex: value })} required>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o sexo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Homem</SelectItem>
                <SelectItem value="female">Mulher</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className={Style.divInput}>
            <Label htmlFor="activityLevel">Qual seu Nível de Atividade?</Label>
            <Select onValueChange={(value) => setFormData({ ...formData, activityLevel: value })} required>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o nível de atividade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sedentario">Sedentário</SelectItem>
                <SelectItem value="pouco-ativo">Pouco Ativo</SelectItem>
                <SelectItem value="moderadamente-ativo">Moderadamente Ativo</SelectItem>
                <SelectItem value="muito-ativo">Muito Ativo</SelectItem>
                <SelectItem value="extremamente-ativo">Extremamente Ativo</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className={Style.divInput}>
            <Label htmlFor="goal">Qual seu Objetivo?</Label>
            <Select onValueChange={(value) => setFormData({ ...formData, goal: value })} required>
              <SelectTrigger>
                <SelectValue placeholder="Selecione seu objetivo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="emagrecer-agressivo">Emagrecer (agressivo)</SelectItem>
                <SelectItem value="emagrecer">Emagrecer</SelectItem>
                <SelectItem value="manter">Manter</SelectItem>
                <SelectItem value="ganhar-massa">Ganhar Massa</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className={Style.button}>
            Calcular
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}


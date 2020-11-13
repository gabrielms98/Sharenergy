import React, { useEffect, useState } from "react";

import MoneyUp from "../../assets/MoneyUp.svg";
import arrowUp from "../../assets/arrowUp.svg";

import {
  DashboardContainer,
  Row,
  GraphContainer,
  MoneyContainer,
  HistoryContainer,
  Img,
  MoneyText,
  HistoryText,
  Hr,
  Percentage,
  PercentageIncrease,
  Icon,
  InformationText,
  Value
} from "./Dashboard";

const Dashboard = ({usuario, usina}) => {

  const [dE, setDE] = useState(0)
  const [percentualUsina, setPercentualUsina] = useState(0)
  const [nomeUsina, setNomeUsina] = useState('')

  const getDadosUsina = async () => {
    let u = await require("../../api/infoUsina.json")
    u = u.filter(_u => _u.numeroUsina === usina)[0]
    
    setNomeUsina(u.nome)
    setPercentualUsina(usuario.usinas.filter(usu => usu.numeroUsina === usina)[0].percentualUsina)

    const json = require("../../api/dadosUsina.json")

    const dT = json[1].tempo_h - json[0].tempo_h
    const dE = dT * (json.map(m => m.potencia_kW).reduce((a, b) => a+b, 0))
    setDE(dE)
  }

  useEffect(() => {
    getDadosUsina()
  }, [])

  return (
    <DashboardContainer>
      <Row>
        <GraphContainer>
          <div>OLAAA</div>
        </GraphContainer>
        <div>
          <MoneyContainer>
            <Img src={MoneyUp}></Img>
            <MoneyText>R$ 110,00</MoneyText>
          </MoneyContainer>
          <HistoryContainer>
            <HistoryText>
              Histórico:
              <Hr />
              <Row>
                <Percentage>58%</Percentage>
                <PercentageIncrease>
                  <Row>
                    <Icon src={arrowUp}></Icon>
                    <div>
                        13%
                    </div>
                  </Row>
                </PercentageIncrease>
              </Row>
              <InformationText>
                <Row col={true}>
                    <div>
                        Energia elétrica total produzida:
                    </div>
                    <Value>{dE.toFixed(2)}kWh</Value>
                </Row>
                
                <Hr margin_top={'15px'}/>

                <Row col={true} margin_top={'15px'}>
                    <div>
                        Porcentagem da usina:
                    </div>
                    <Value>{percentualUsina}%</Value>
                </Row>
                
                <Hr margin_top={'15px'}/>

                <Row col={true} margin_top={'15px'}>
                    <div>
                        Nome usina:
                    </div>
                    <Value>{nomeUsina}</Value>
                </Row>

              </InformationText>
            </HistoryText>
          </HistoryContainer>
        </div>
      </Row>
    </DashboardContainer>
  );
};

export default Dashboard;

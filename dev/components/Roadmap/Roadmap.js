import React, { Component } from "react";

import Grid from '@material-ui/core/Grid';

import './Roadmap.scss'
import plane from '../../img/plane.png';
import priz from '../../img/prizes.png';

export default class Main extends Component {
    render() {
        return (
            <Grid container direction='column' className={'Roadmap'}>
                {/* <Grid item xs={8} className={'RoadmapContainer'}> */}
                    <div className='RoadmapBlock'>
                        <span className='RoadmapNumb'>1
                        <span lassName='RoadmapNumbLine'/>
                        </span>
                            <h3>
                            Зарегистрируй свой уникальный промокод
                            </h3>
                            <p>
                            и присоединяйся к программе подготовки амбассадоров
                            </p>
                    </div>
                    <Grid container direction='row-reverse' alignItems='center' justify='space-between' className='RoadmapBlock'>
                        <Grid item className='RoadmapTextContainer'>
                        <span className='RoadmapNumb'>2
                        <span lassName='RoadmapNumbLine'/>
                        </span>

                            <p>
                            Выполняй еженедельные задания,<br/>
                            получай баллы,
                            </p>
                            <h3>
                            и меняй их на призы*
                            </h3>
                            <p>
                            *Призы могут отличаться по внешнему виду от изображений
                            на рекламных материалах
                            </p>
                        </Grid>
                        <Grid item className='RoadmapImgContainer'>
                            {/* //<img src={priz} width='100%' height='100%'/> */}
                        </Grid>
                    </Grid>
                    <Grid container  className='RoadmapBlock'>
                        <Grid item xs={6}>
                            <span className='RoadmapNumb'>3
                            <span lassName='RoadmapNumbLine'/>                            </span>
                            <h3>
                            Выиграй поездку в Германию
                            в сады Weleda
                            </h3>
                            <p>
                            или годовой запас косметики Weleda
                            </p>
                        </Grid>
                        <Grid item xs={6} className={'RoadmapImgContainer'}>
                            <img src={plane}/>
                        </Grid>
                    </Grid>
                    
                {/* </Grid> */}
            </Grid>
        )
    }
}
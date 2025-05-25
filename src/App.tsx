//@ts-nocheck
import { useState } from 'react'
import './app.css'
import ImageChoice, { QuestionPreview } from './components/ImageChoice'
import { AppProvider } from '@shopify/polaris'
import '@shopify/polaris/build/esm/styles.css'


const quizData = [
  {
      "id": "cmb3ahp77001h0yhf77v6x5mv",
      "ref": "brew-method-at-home",
      "type": "PICTURE_CHOICE",
      "title": {
          "id": "cmb3ahp77001i0yhfme6z5wm8",
          "type": "TEXT",
          "content": {
              "text": {
                  "content": "How do you usually make coffee at home?",
                  "isRichText": false,
                  "allowedTags": [],
                  "maxLength": null
              },
              "media": null,
              "button": null,
              "html": null,
              "spacer": null
          },
          "styling": null,
          "order": 0
      },
      "description": null,
      "additionalContent": [],
      "config": {
          "choices": [
              {
                  "id": "cmb3ahp78001j0yhf4lowxh9q",
                  "ref": "coffee-maker",
                  "label": "Coffee Maker",
                  "value": null,
                  "description": null,
                  "media": {
                      "url": "https://cdn.filestackcontent.com/iGskRlNeTWCnOLE8sh5F",
                      "altText": null,
                      "caption": null,
                      "dimensions": null,
                      "playback": null,
                      "validation": null
                  },
                  "scoring": null,
                  "order": 0
              },
              {
                  "id": "cmb3ahp78001k0yhfkfr394z5",
                  "ref": "french-press",
                  "label": "French Press",
                  "value": null,
                  "description": null,
                  "media": {
                      "url": "https://cdn.filestackcontent.com/5HKARUZWSAeVHSp9yILJ",
                      "altText": null,
                      "caption": null,
                      "dimensions": null,
                      "playback": null,
                      "validation": null
                  },
                  "scoring": null,
                  "order": 0
              },
              {
                  "id": "cmb3ahp78001l0yhfe619f8bv",
                  "ref": "pour-over",
                  "label": "Pour Over",
                  "value": null,
                  "description": null,
                  "media": {
                      "url": "https://cdn.filestackcontent.com/zzw9LCESuOh3Ij2hQ4DA",
                      "altText": null,
                      "caption": null,
                      "dimensions": null,
                      "playback": null,
                      "validation": null
                  },
                  "scoring": null,
                  "order": 0
              },
              {
                  "id": "cmb3ahp78001m0yhf3tiazbi5",
                  "ref": "chemex",
                  "label": "Chemex",
                  "value": null,
                  "description": null,
                  "media": {
                      "url": "https://cdn.filestackcontent.com/mhwKsVLzSDeaI3RSy0Wn",
                      "altText": null,
                      "caption": null,
                      "dimensions": null,
                      "playback": null,
                      "validation": null
                  },
                  "scoring": null,
                  "order": 0
              }
          ],
          "allowMultiple": false,
          "allowOther": false,
          "randomizeChoices": false,
          "placeholder": null,
          "maxLength": null,
          "inputMask": null,
          "minSelections": null,
          "maxSelections": null,
          "display": {
              "layout": "VERTICAL",
              "itemsPerRow": {
                  "mobile": 2,
                  "tablet": 3,
                  "desktop": 4
              },
              "imageAspectRatio": "SQUARE",
              "textPosition": "BOTTOM",
              "useCarousel": false,
              "carousel": null,
              "enableImageZoom": false,
              "imagePreviewMode": "THUMBNAIL",
              "selectionIndicator": "BORDER",
              "allowImageUpload": false,
              "imageSize": null,
              "imageFit": null,
              "overlay": null,
              "border": null,
              "defaultState": null,
              "selectedState": null,
              "hoverState": null,
              "labelStyle": null,
              "descStyle": null
          },
          "subFields": [],
          "special": null
      },
      "validation": {
          "required": true,
          "minLength": null,
          "maxLength": null,
          "minValue": null,
          "maxValue": null,
          "pattern": null,
          "customMessage": null,
          "dependsOn": []
      },
      "layout": "GRID",
      "styling": null,
      "order": 0,
      "isRequired": false
  },
  {
      "id": "cmb3ahp78001n0yhfw61i4063",
      "ref": "coffee-additives",
      "type": "PICTURE_CHOICE",
      "title": {
          "id": "cmb3ahp78001o0yhf38vuzu1r",
          "type": "TEXT",
          "content": {
              "text": {
                  "content": "Do you add anything to your coffee?",
                  "isRichText": false,
                  "allowedTags": [],
                  "maxLength": null
              },
              "media": null,
              "button": null,
              "html": null,
              "spacer": null
          },
          "styling": null,
          "order": 0
      },
      "description": {
          "id": "cmb3ahp78001p0yhfnl99aih7",
          "type": "TEXT",
          "content": {
              "text": {
                  "content": "Some coffees can be enhanced by milk, but others may react negatively and result in an unpleasant taste.",
                  "isRichText": false,
                  "allowedTags": [],
                  "maxLength": null
              },
              "media": null,
              "button": null,
              "html": null,
              "spacer": null
          },
          "styling": null,
          "order": 0
      },
      "additionalContent": [],
      "config": {
          "choices": [
              {
                  "id": "choice_1748158466827",
                  "ref": "choice_1748158466827",
                  "label": "Option 1",
                  "value": "option_1",
                  "description": null,
                  "media": {
                      "url": "https://admin.shopify.com/store/quickstart-3b000e3c/apps/quick-discovery/app/quizzes/60f8c9a9c6d7e8001f4e4b05",
                      "altText": "Option 1",
                      "caption": null,
                      "dimensions": null,
                      "playback": null,
                      "validation": null
                  },
                  "scoring": null,
                  "order": 0
              },
              {
                  "id": "choice_1748158468882",
                  "ref": "choice_1748158468882",
                  "label": "Option 2",
                  "value": "option_2",
                  "description": null,
                  "media": {
                      "url": "https://admin.shopify.com/store/quickstart-3b000e3c/apps/quick-discovery/app/quizzes/60f8c9a9c6d7e8001f4e4b05",
                      "altText": "Option 2",
                      "caption": null,
                      "dimensions": null,
                      "playback": null,
                      "validation": null
                  },
                  "scoring": null,
                  "order": 1
              }
          ],
          "allowMultiple": false,
          "allowOther": false,
          "randomizeChoices": false,
          "placeholder": "",
          "maxLength": null,
          "inputMask": "",
          "minSelections": null,
          "maxSelections": null,
          "display": {
              "layout": "VERTICAL",
              "itemsPerRow": {
                  "mobile": 1,
                  "tablet": 2,
                  "desktop": 3
              },
              "imageAspectRatio": "SQUARE",
              "textPosition": "BOTTOM",
              "useCarousel": false,
              "carousel": null,
              "enableImageZoom": false,
              "imagePreviewMode": "THUMBNAIL",
              "selectionIndicator": "BORDER",
              "allowImageUpload": false,
              "imageSize": null,
              "imageFit": null,
              "overlay": null,
              "border": null,
              "defaultState": null,
              "selectedState": null,
              "hoverState": null,
              "labelStyle": null,
              "descStyle": null
          },
          "subFields": [],
          "special": null
      },
      "validation": {
          "required": true,
          "minLength": null,
          "maxLength": null,
          "minValue": null,
          "maxValue": null,
          "pattern": null,
          "customMessage": null,
          "dependsOn": []
      },
      "layout": "GRID",
      "styling": null,
      "order": 0,
      "isRequired": false
  },
  {
      "id": "cmb3ahp78001u0yhf9nmv5gxl",
      "ref": "coffee-frequency",
      "type": "MULTIPLE_CHOICE",
      "title": {
          "id": "cmb3ahp78001v0yhf3lxjmjmx",
          "type": "TEXT",
          "content": {
              "text": {
                  "content": "How often do you drink coffee?",
                  "isRichText": false,
                  "allowedTags": [],
                  "maxLength": null
              },
              "media": null,
              "button": null,
              "html": null,
              "spacer": null
          },
          "styling": null,
          "order": 0
      },
      "description": null,
      "additionalContent": [],
      "config": {
          "choices": [
              {
                  "id": "cmb3ahp79001w0yhfhzvzy06v",
                  "ref": "once-a-day",
                  "label": "Once a day",
                  "value": null,
                  "description": null,
                  "media": null,
                  "scoring": null,
                  "order": 0
              },
              {
                  "id": "cmb3ahp79001x0yhfp1fv320e",
                  "ref": "twice-a-day",
                  "label": "Twice a day",
                  "value": null,
                  "description": null,
                  "media": null,
                  "scoring": null,
                  "order": 0
              },
              {
                  "id": "cmb3ahp79001y0yhf7rsikh4m",
                  "ref": "thrice-plus-a-day",
                  "label": "More then 3 times a day",
                  "value": null,
                  "description": null,
                  "media": null,
                  "scoring": null,
                  "order": 0
              }
          ],
          "allowMultiple": false,
          "allowOther": false,
          "randomizeChoices": true,
          "placeholder": null,
          "maxLength": null,
          "inputMask": null,
          "minSelections": null,
          "maxSelections": null,
          "display": {
              "layout": "VERTICAL",
              "itemsPerRow": null,
              "imageAspectRatio": null,
              "textPosition": "BOTTOM",
              "useCarousel": false,
              "carousel": null,
              "enableImageZoom": false,
              "imagePreviewMode": "THUMBNAIL",
              "selectionIndicator": "BORDER",
              "allowImageUpload": false,
              "imageSize": null,
              "imageFit": null,
              "overlay": null,
              "border": null,
              "defaultState": null,
              "selectedState": null,
              "hoverState": null,
              "labelStyle": null,
              "descStyle": null
          },
          "subFields": [],
          "special": null
      },
      "validation": {
          "required": true,
          "minLength": null,
          "maxLength": null,
          "minValue": null,
          "maxValue": null,
          "pattern": null,
          "customMessage": null,
          "dependsOn": []
      },
      "layout": "VERTICAL",
      "styling": null,
      "order": 0,
      "isRequired": false
  },
  {
      "id": "field_1748158120022",
      "ref": "field_1748158120022",
      "type": "MULTIPLE_CHOICE",
      "title": {
          "id": "content_1748158120022",
          "type": "TEXT",
          "content": {
              "text": {
                  "content": "New Question",
                  "isRichText": false,
                  "allowedTags": [],
                  "maxLength": null
              },
              "media": null,
              "button": null,
              "html": null,
              "spacer": null
          },
          "styling": null,
          "order": 0
      },
      "description": null,
      "additionalContent": [],
      "config": {
          "choices": [
              {
                  "id": "choice_1",
                  "ref": "choice_1",
                  "label": "Option 1",
                  "value": "option1",
                  "description": null,
                  "media": null,
                  "scoring": null,
                  "order": 0
              },
              {
                  "id": "choice_2",
                  "ref": "choice_2",
                  "label": "testing ",
                  "value": "option2",
                  "description": null,
                  "media": null,
                  "scoring": null,
                  "order": 1
              },
              {
                  "id": "choice_1748158128147",
                  "ref": "choice_1748158128147",
                  "label": "Option 3",
                  "value": "option_3",
                  "description": null,
                  "media": null,
                  "scoring": null,
                  "order": 2
              }
          ],
          "allowMultiple": false,
          "allowOther": false,
          "randomizeChoices": false,
          "placeholder": "",
          "maxLength": null,
          "inputMask": "",
          "minSelections": null,
          "maxSelections": null,
          "display": {
              "layout": "VERTICAL",
              "itemsPerRow": {
                  "mobile": 1,
                  "tablet": 2,
                  "desktop": 3
              },
              "imageAspectRatio": "SQUARE",
              "textPosition": "BOTTOM",
              "useCarousel": false,
              "carousel": null,
              "enableImageZoom": false,
              "imagePreviewMode": "THUMBNAIL",
              "selectionIndicator": "BORDER",
              "allowImageUpload": false,
              "imageSize": null,
              "imageFit": null,
              "overlay": null,
              "border": null,
              "defaultState": null,
              "selectedState": null,
              "hoverState": null,
              "labelStyle": null,
              "descStyle": null
          },
          "subFields": [],
          "special": null
      },
      "validation": {
          "required": false,
          "minLength": null,
          "maxLength": null,
          "minValue": null,
          "maxValue": null,
          "pattern": null,
          "customMessage": null,
          "dependsOn": []
      },
      "layout": "VERTICAL",
      "styling": null,
      "order": 3,
      "isRequired": false
  }
]



export default function App() {
  const [count, setCount] = useState(1)

  return (
    <AppProvider i18n={{}}>
      <div
      style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw' }}
      >

    <QuestionPreview field={quizData[count-1]} questionNumber={count}
     onNext={() => setCount(count + 1)}
     onPrevious={() => setCount(count - 1)}
    />
      </div>
    </AppProvider>

  )
}

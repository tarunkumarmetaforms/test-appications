//@ts-nocheck
import { useState } from 'react';
import {
  BlockStack,
  Text,
  Card,
  Grid,
  Box,
  Thumbnail,
  RadioButton,
  Checkbox,
  TextField,
  Button,
  InlineStack
} from '@shopify/polaris';

interface FieldChoice {
  id: string;
  ref: string;
  label: string;
  value: string;
  order: number;
  media?: {
    url: string;
    altText?: string;
  };
  scoring?: {
    points: number;
  };
}

interface ImageChoiceProps {
  question: {
    config: {
      choices: FieldChoice[];
      allowMultiple?: boolean;
      display?: {
        imageSize?: string;
        itemsPerRow?: {
          desktop?: number;
        };
      };
    };
  };
}

// Define missing types and enums
enum FieldType {
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  SINGLE_CHOICE = 'SINGLE_CHOICE',
  PICTURE_CHOICE = 'PICTURE_CHOICE',
  RATING_SCALE = 'RATING_SCALE',
  TEXT_INPUT = 'TEXT_INPUT',
  EMAIL = 'EMAIL',
  OPINION_SCALE = 'OPINION_SCALE'
}

interface FieldConfig {
  choices?: FieldChoice[];
  allowMultiple?: boolean;
  allowOther?: boolean;
  placeholder?: string;
  display?: {
    imageSize?: string;
    itemsPerRow?: {
      desktop?: number;
    };
  };
  special?: {
    scale?: {
      min: number;
      max: number;
      step: number;
      showNumbers: boolean;
      labels: {
        left?: string;
        right?: string;
      };
    };
  };
}

interface QuestionField {
  type: FieldType;
  config?: FieldConfig;
  additionalContent?: any[];
  validation?: {
    required?: boolean;
    maxLength?: number;
    minValue?: number;
    maxValue?: number;
  };
}

interface QuestionPreviewProps {
  field?: QuestionField;
  questionNumber?: number;
}

// Mock functions for missing dependencies
const getQuestionTitle = (field: QuestionField): string => {
  return "Sample Question Title";
};

const getQuestionDescription = (field: QuestionField): string => {
  return "Sample question description";
};

const ContentBlockRenderer = ({ block }: { block: any }) => {
  return <div>Content Block</div>;
};

function ImageChoice({ question }: ImageChoiceProps) {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const choices = question.config.choices || [];
  const allowMultiple = question.config.allowMultiple || false;
  const itemsPerRow = question.config.display?.itemsPerRow?.desktop || 3;

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${itemsPerRow}, 1fr)`,
      gap: '16px'
    }}>
      {choices.map((choice, index) => (
        <div
          key={choice.ref || index}
          style={{
            border: '2px solid #e1e3e5',
            borderRadius: '8px',
            padding: '12px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            position: 'relative'
          }}
        >
          <div style={{
            height: '120px',
            backgroundColor: '#f6f6f7',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '8px',
            backgroundImage: choice.media?.url ? `url(${choice.media.url})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
            {!choice.media?.url && (
              <Text variant="bodyMd" as="span" tone="subdued">
                📷 {choice.media?.altText || "Image"}
              </Text>
            )}
          </div>

          <Text variant="bodyMd" as="p" alignment="center">
            {choice.label}
          </Text>

          {choice.scoring && choice.scoring.points > 0 && (
            <div style={{ marginTop: '8px' }}>
              <Text variant="bodySm" as="p" tone="subdued">
                ⚙️ Points: {choice.scoring.points}
              </Text>
            </div>
          )}

          {/* Choice control */}
          <div style={{ position: "absolute", top: "8px", right: "8px" }}>
            {allowMultiple ? (
              <Checkbox
                label=""
                checked={false}
                onChange={() => {}}
              />
            ) : (
              <RadioButton
                label=""
                checked={false}
                name="preview-choice"
                onChange={() => {}}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

const ChoiceRenderer = ({ choice, index, allowMultiple, isOther = false }: {
  choice: FieldChoice,
  index: number,
  allowMultiple: boolean,
  isOther?: boolean
}) => {
  const hasAttachment = choice.media?.url;
  const hasScoring = choice.scoring && choice.scoring.points > 0;

  if (hasAttachment) {
    return (
      <div style={{
        border: "2px solid #e1e3e5",
        borderRadius: "8px",
        padding: "12px",
        cursor: "pointer",
        transition: "all 0.2s ease",
        position: "relative"
      }}>
        {/* Image */}
        <div style={{
          height: "120px",
          backgroundColor: "#f6f6f7",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "8px",
          backgroundImage: choice.media?.url ? `url(${choice.media.url})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
          {!choice.media?.url && (
            <Text variant="bodyMd" as="span" tone="subdued">
              📷 {choice.media?.altText || "Image"}
            </Text>
          )}
        </div>

        {/* Label */}
        <Text variant="bodyMd" as="p" alignment="center">
          {choice.label}
        </Text>

        {/* Scoring info */}
        {hasScoring && (
          <div style={{ marginTop: "8px" }}>
            <Text variant="bodySm" as="p" tone="subdued">
              ⚙️ Points: {choice.scoring?.points}
            </Text>
          </div>
        )}

        {/* Choice control */}
        <div style={{ position: "absolute", top: "8px", right: "8px" }}>
          {allowMultiple ? (
            <Checkbox
              label=""
              checked={false}
              onChange={() => {}}
            />
          ) : (
            <RadioButton
              label=""
              checked={false}
              name="preview-choice"
              onChange={() => {}}
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: "8px 0" }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
        {allowMultiple ? (
          <Checkbox
            label={choice.label}
            checked={false}
            onChange={() => {}}
          />
        ) : (
          <RadioButton
            label={choice.label}
            checked={false}
            name="preview-choice"
            onChange={() => {}}
          />
        )}
      </div>

      {/* Show scoring info */}
      {hasScoring && (
        <div style={{ marginLeft: "28px", marginTop: "4px" }}>
          <Text variant="bodySm" as="p" tone="subdued">
            ⚙️ Points: {choice.scoring?.points}
          </Text>
        </div>
      )}

      {isOther && (
        <div style={{ marginTop: "8px", marginLeft: "24px" }}>
          <TextField
            label=""
            value=""
            onChange={() => {}}
            placeholder="Please specify..."
            autoComplete="off"
          />
        </div>
      )}
    </div>
  );
};

const MultipleChoicePreview = ({ config }: { config: FieldConfig }) => {
  const choices = config.choices || [];
  const allowMultiple = config.allowMultiple || false;
  const isImageChoice = config.display?.imageSize !== undefined;

  if (true) {
    return (
      <div style={{
        display: "grid",
        gridTemplateColumns: `repeat(${config.display?.itemsPerRow?.desktop || 3}, 1fr)`,
        gap: "16px"
      }}>
        {choices.map((choice, index) => (
          <ChoiceRenderer
            key={choice.ref || index}
            choice={choice}
            index={index}
            allowMultiple={allowMultiple}
          />
        ))}
      </div>
    );
  }

  return (
    <BlockStack gap="300">
      {choices.map((choice, index) => (
        <ChoiceRenderer
          key={choice.ref || index}
          choice={choice}
          index={index}
          allowMultiple={allowMultiple}
        />
      ))}
      {config.allowOther && (
        <ChoiceRenderer
          choice={{ id: "other", ref: "other", label: "Other:", value: "other", order: choices.length }}
          index={choices.length}
          allowMultiple={allowMultiple}
          isOther={true}
        />
      )}
    </BlockStack>
  );
};

const RatingPreview = ({ config }: { config: FieldConfig }) => {
  const scaleConfig = config.special?.scale || {
    min: 1,
    max: 5,
    step: 1,
    showNumbers: true,
    labels: {}
  };

  return (
    <BlockStack gap="300">
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "12px"
      }}>
        {scaleConfig.labels?.left && (
          <Text variant="bodyMd" as="span" tone="subdued">
            {scaleConfig.labels.left}
          </Text>
        )}
        <div style={{ display: "flex", gap: "8px", flex: 1, justifyContent: "center" }}>
          {Array.from({ length: scaleConfig.max - scaleConfig.min + 1 }, (_, index) => (
            <div
              key={index}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "2px solid #e1e3e5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                backgroundColor: "white",
                transition: "all 0.2s ease",
              }}
            >
              <Text variant="bodyMd" as="span">
                {scaleConfig.showNumbers ? scaleConfig.min + index : "★"}
              </Text>
            </div>
          ))}
        </div>
        {scaleConfig.labels?.right && (
          <Text variant="bodyMd" as="span" tone="subdued">
            {scaleConfig.labels.right}
          </Text>
        )}
      </div>
    </BlockStack>
  );
};

const TextInputPreview = ({ config }: { config: FieldConfig }) => {
  return (
    <TextField
      label=""
      value=""
      onChange={() => {}}
      placeholder={config.placeholder || "Enter your answer..."}
      autoComplete="off"
    />
  );
};

const EmailPreview = ({ config }: { config: FieldConfig }) => {
  return (
    <TextField
      label=""
      type="email"
      value=""
      onChange={() => {}}
      placeholder={config.placeholder || "Enter your email address"}
      autoComplete="email"
    />
  );
};

export function QuestionPreview({ field, questionNumber = 1, onNext, onPrevious }: QuestionPreviewProps) {
  if (!field) {
    return (
      <div style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "400px"
      }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "64px", marginBottom: "24px", opacity: 0.3 }}>👁️</div>
          <Text variant="headingLg" as="h2" tone="subdued">
            Preview
          </Text>
          <Text variant="bodyMd" as="p" tone="subdued">
            Select a question from the sidebar to see how it will look to your quiz takers
          </Text>
        </div>
      </div>
    );
  }

  const title = getQuestionTitle(field);
  const description = getQuestionDescription(field);

  const renderQuestionContent = () => {
    if (!field.config) return null;
    console.log(field.config , "field.config");
    switch (field.type) {
      case FieldType.MULTIPLE_CHOICE:
      case FieldType.SINGLE_CHOICE:
      case FieldType.PICTURE_CHOICE:
        return <MultipleChoicePreview config={field.config} />;
      case FieldType.RATING_SCALE:
      case FieldType.OPINION_SCALE:
        return <RatingPreview config={field.config} />;
      case FieldType.TEXT_INPUT:
        return <TextInputPreview config={field.config} />;
      case FieldType.EMAIL:
        return <EmailPreview config={field.config} />;
      default:
        return (
          <Text variant="bodyMd" as="p" tone="subdued">
            Preview not available for this question type: {field.type}
          </Text>
        );
    }
  };

    const newLocal = <div style={{ marginTop: "40px", paddingTop: "24px", borderTop: "1px solid #e1e3e5" }}>
        <InlineStack align="space-between">
            <Button
                variant="secondary"
                onClick={onPrevious}
                disabled={questionNumber <= 1}
            >
                Previous
            </Button>
            <Button
                variant="primary"
                onClick={onNext}
            >
                {field.validation?.required ? "Continue" : "Continue (Optional)"}
            </Button>
        </InlineStack>
    </div>;
  return (
    <div style={{ height: "100%", padding: "20px" }}>
      <Card>
        <div style={{ padding: "32px" }}>
          <BlockStack gap="600">
            {/* Top Content Blocks */}
            {field.additionalContent && field.additionalContent.length > 0 && (
              <BlockStack gap="400">
                {field.additionalContent.map((block, index) => (
                  <ContentBlockRenderer key={block.id || index} block={block} />
                ))}
              </BlockStack>
            )}

            {/* Question Header */}
            <div>
              <Text variant="bodySm" as="p" tone="subdued">
                Question {questionNumber}
              </Text>
              <Text variant="headingLg" as="h2">
                {title}
              </Text>
              {description && (
                <div style={{ marginTop: "8px" }}>
                  <Text variant="bodyMd" as="p" tone="subdued">
                    {description}
                  </Text>
                </div>
              )}
            </div>

            {/* Question Content */}
            <div>
              {renderQuestionContent()}
            </div>

            {/* Validation & Requirements */}
            {field.validation && (
              <div style={{ padding: "12px", backgroundColor: "#f6f6f7", borderRadius: "6px" }}>
                <Text variant="bodySm" as="p" tone="subdued">
                  {field.validation.required && "• Required field"}
                  {field.validation.maxLength && ` • Max ${field.validation.maxLength} characters`}
                  {field.validation.minValue && ` • Min value: ${field.validation.minValue}`}
                  {field.validation.maxValue && ` • Max value: ${field.validation.maxValue}`}
                </Text>
              </div>
            )}

            {/* Navigation Buttons */}
            {newLocal}
          </BlockStack>
        </div>
      </Card>
    </div>
  );
}

export default ImageChoice;
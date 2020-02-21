import React from 'react'
import styled from 'styled-components'
import { Header, Text } from '../../components/elements/typography'
import { Article } from './_article'
import { localize, WithIntl } from 'components/localization'

const ArticleWrapper = styled.div`
    max-width: 79.2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    font-size: var(--text-size-s);
    line-height: 1.5;
    padding-left: 2.4rem;
`

const VerifyAccount = () => (
    <ArticleWrapper>
        <Header as="h4" margin=" 0 0 2.4rem 0" lh="1.5">
            {localize('Do I need to verify my Deriv account?')}
        </Header>
        <Text>
            {localize(
                'No, you do not need to verify your Deriv account unless prompted. If your account requires verification, we will contact you via email to initiate the process and provide you with clear instructions on how to submit your documents.',
            )}
        </Text>
    </ArticleWrapper>
)
const VerificationDuration = () => (
    <ArticleWrapper>
        <Header as="h4" margin=" 0 0 2.4rem 0" lh="1.5">
            {localize('How long does verification take?')}
        </Header>
        <Text>
            {localize(
                'We’ll typically take 1-3 business days to review your documents and will inform you of the result via email once it’s done.',
            )}
        </Text>
    </ArticleWrapper>
)
const DocumentsDeclined = () => (
    <ArticleWrapper>
        <Header as="h4" margin=" 0 0 2.4rem 0" lh="1.5">
            {localize('Why were my documents declined?')}
        </Header>
        <Text>
            {localize(
                'We may decline your verification documents if they are insufficiently clear, invalid, expired, forged, or have cropped edges. If this happens, we will contact you via email to request a valid document.',
            )}
        </Text>
    </ArticleWrapper>
)

const SecurityArticle = () => {
    return (
        <Article header="Security">
            <VerifyAccount
                text={localize('Do I need to verify my Deriv account?')}
                label="verify-account"
            />
            <VerificationDuration
                text={localize('How long does verification take?')}
                label="verification-duration"
            />
            <DocumentsDeclined
                text={localize('Why were my documents declined?')}
                label="documents-declined"
            />
        </Article>
    )
}

export default WithIntl()(SecurityArticle)
